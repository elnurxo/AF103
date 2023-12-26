import { Typography } from "@mui/material";
import { Col, Row } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import UserSignUp from "../components/UserSignUp";
import ArtistsSignUp from "../components/ArtistsSignUp";

const Register = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Sign Up as user",
      children: <UserSignUp />,
    },
    {
      key: "2",
      label: "Sign Up as artist",
      children: <ArtistsSignUp />,
    },
  ];
  return (
    <Row style={{ justifyContent: "center", marginTop: "40px" }}>
      <Col span={8} xl={8} md={24} xs={24}>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "20px 25px",
            borderRadius: "10px",
          }}
        >
          <Typography align="center" variant="h5">
            Sign Up
          </Typography>
          <Tabs tabBarStyle={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'20px auto'
          }} defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </Col>
    </Row>
  );
};

export default Register;
