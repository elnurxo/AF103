import { Button, TextField } from "@mui/material";
import { Col, Row, Card, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { ChangeEvent, useEffect } from "react";
import { getAllArtists } from "../services/api/artists";
import { Link, useNavigate } from "react-router-dom";
import { useArtistContext } from "../services/context/ArtistContext";
import { useAuthContext } from "../services/context/AuthContext";

const Artists = () => {
  // const[artists, setArtists] = useState<Artist[]>([]);
  const[artists, setArtists] = useArtistContext();
  const[auth] = useAuthContext();
  const navigate = useNavigate();
  useEffect(()=>{
    if (auth==undefined) {
      navigate('/login');
    }
  },[auth,navigate]);
  
  useEffect(()=>{
    getAllArtists().then((res)=>{
      setArtists(res);
    })
  },[setArtists])
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "35px" }}>Artists 🎵</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            marginTop: "25px",
          }}
        >
          <TextField
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
              if (e.target.value.trim()=='') {
                getAllArtists().then((res)=>{
                  setArtists(res);
                })
              }
              else{
                getAllArtists(e.target.value).then((res)=>{
                  setArtists(res);
                })
              }
          }}
            id="outlined-basic"
            label="Search Artist"
            variant="outlined"
          />
          <Button onClick={()=>{
              setArtists((prevArtists)=> [...prevArtists.sort((x,y)=>x.age-y.age)]);
          }} variant="contained" color="success">
            sort by age
          </Button>
        </div>
      </div>
      <Row gutter={20} style={{maxWidth:'80%',display:'flex',justifyContent:'center',margin:'30px auto'}}>
          {artists && artists.map((artist)=>{
            return <Col key={artist._id} style={{marginBottom:'20px'}} span={6} xl={6} md={12} sm={24} xs={24}>
            <Card
              hoverable
              cover={
                <img
                height={250}
                style={{objectFit:'cover',objectPosition:'top center'}}
                  alt="example"
                  src={artist.profileImage}
                />
              }
            >
               <Typography style={{marginBottom:'10px'}}>
                <Link to={`/artists/${artist._id}`}><b>{artist.stageName}</b></Link>
               </Typography>
              <Meta description={artist.genre} />
              <Typography>birth date: <b>{artist.birthDate}</b></Typography>
            </Card>
          </Col>
          })}
      </Row>
    </>
  );
};

export default Artists;
