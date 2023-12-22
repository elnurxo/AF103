import { Card, Col, Typography, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArtistByID } from '../services/api/artists';
import Meta from 'antd/es/card/Meta';
import { Button } from '@mui/material';


const ArtistDetail = () => {
  const{id} = useParams();
  const[artist,setArtist] = useState<Artist | undefined>(undefined);

  useEffect(()=>{
   if (id) {
    getArtistByID(id).then((res)=>{
      setArtist(res);
    })
   }
  },[id]);
  return (
    <div style={{display:'flex',height:'88vh',justifyContent:'center',alignItems:'center'}}>
      {artist ? <div>
        <Button style={{display:'block',margin:'20px auto'}} variant='outlined' color='warning'>
          <Link to='/artists'>Go Back</Link>
        </Button>
        <Col span={24}>
            <Card
              hoverable
              cover={
                <img
                height={250}
                style={{objectFit:'cover',objectPosition:'top center'}}
                  alt="example"
                  src={artist.imageURL}
                />
              }
            >
               <Typography style={{marginBottom:'10px'}}>
                <b>{artist.name}</b>
               </Typography>
              <Meta description={artist.genre} />
              <Typography>age: <b>{artist.age}</b></Typography>
            </Card>
    </Col>
      </div> : <Spin />}
    </div>
  )
}

export default ArtistDetail