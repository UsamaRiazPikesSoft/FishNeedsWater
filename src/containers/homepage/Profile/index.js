import React from 'react'
import {Button,Layout,Row,Col} from 'antd'
import './profile.css'
const {Content, Sider}=Layout;

export default function index() {
    return (
        <div>
            <Layout >
                <Sider id="leftsider" width="15%" style={{height:"750px"}}>
                </Sider>
                <Content>
                <h2 id="profiletext">Profile</h2>
                <div id="profile">

                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">Name</p></Col>
                        <Col span={7}><p className="col2">Usama Riaz</p></Col> 
                    </Row>
                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">Email</p></Col>
                        <Col span={7}><p className="col2">usamariaz175@gmail.com</p></Col> 
                    </Row>

                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">Phone</p></Col>
                        <Col span={7}><p className="col2">+923058971509 </p></Col> 
                    </Row>
                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">New Password</p></Col>
                        <Col span={7}><p className="col2">Change Password</p></Col> 
                    </Row>
                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">Abc Email</p></Col>
                        <Col span={7}><p className="col2">abcemail@gmail.com</p></Col> 
                    </Row>
                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">SMS Number</p></Col>
                        <Col span={7}><p className="col2">+923341149300</p></Col> 
                    </Row>
                    <Row className="row lineheight">
                        <Col span={8}><p className="col1">TimeZone</p></Col>
                        <Col span={7}><p className="col2">Europe/London</p></Col> 
                    </Row>
                    <Row style={{marginTop:"15px",lineHeight:3}} >
                        <Col span={8}><p className="col1">Plan</p></Col>
                        <Col span={7}><p className="col2">Managed Plan</p></Col> 
                    </Row >
                    <div style={{margin:"auto",textAlign:"center",marginTop:"20px"}}>
                    <Button id="changeplan">Change Plan</Button>
                    </div>
                </div> 
                </Content>
                <Sider id="leftsider" width="15%" style={{height:"750px"}}></Sider>
            </Layout>
        </div>
    )
}
