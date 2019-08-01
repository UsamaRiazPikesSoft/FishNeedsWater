import React from 'react'
import {Layout} from 'antd'
import Leftsider from './Leftsider'
import Messages from './Messages'
import RightSider from './Rightsider'
import './conversations.css'
const {Content, Sider}=Layout;


export default function index() {

    return (
        <div>
            <Layout >
                <Sider id="leftSider" width="25%" style={{height:"750px"}}>
                    <Leftsider/>
                </Sider>
                <Content><Messages/></Content>
                <Sider id="rightSider" width="25%" style={{height:"750px"}}><RightSider/></Sider>
            </Layout>
        </div>
    )
}
