import React from 'react'
import {Layout} from 'antd'
import Leftsider from './Leftsider'
import './livescripts.css'
import CenterContent from './Centercontent'
const {Content, Sider}=Layout;



export default function index() {
    return (
        <div>
            <Layout >
                <Sider id="leftsider" width="25%" style={{height:"750px"}}>
                    <Leftsider/>
                </Sider>
                <Content>
                    <CenterContent/>
                </Content>
                <Sider id="leftsider" width="25%" style={{height:"750px"}}></Sider>
            </Layout>
        </div>
    )
}
