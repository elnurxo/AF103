import { useState } from "react";
import "./App.css";
import { Col, Divider, Row, Table } from "antd";
import { useEffect } from "react";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function App() {
  let[suppliers,setSuppliers] = useState([]);
  useEffect(()=>{
    fetch('https://northwind.vercel.app/api/suppliers')
    .then((res)=>res.json())
    .then((data)=>setSuppliers(data));
  },[]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      // filters: [
      //   {
      //     text: 'Joe',
      //     value: 'Joe',
      //   },
      //   {
      //     text: 'Jim',
      //     value: 'Jim',
      //   },
      // ],
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b.name)
    },
    {
      title: 'City',
      dataIndex: ['address','city'],
      filters: suppliers.map((item)=>{
        return  {
          text: item.address?.city,
          value: item.address?.city,
        }
      }),
      onFilter: (value, record) => {
        console.log('value',value);
        console.log('record: ',record);
        return record.address?.city === value
      },
    },
  ];
  return (
    <>
      {/* <div style={{margin:'0 auto',width:'90%'}}>
     <Row gutter={[10,20]}>
        <Col className="gutter-row" span={12}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="center">Responsive</Divider>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
     </div> */}
      <Divider orientation="left">Table</Divider>
      <Table style={{width:'90%',margin:'0 auto'}} columns={columns} dataSource={suppliers} onChange={onChange} />;
    </>
  );
}

export default App;
