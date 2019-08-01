import React ,{useState} from 'react'
import {Layout,Tabs,Button, Icon,Tooltip, Dropdown,Menu } from 'antd'
import './homepage.css'
import Conversations from '../Conversations'
import LiveScripts from '../LiveScripts'
import Members from '../Members'
import Profile from './Profile'
const {Header}=Layout;
const {TabPane}=Tabs;



export default function Homepage() {

  
const [activeTab,setTab]= useState("1");

const menu = (
  <Menu style={{marginTop:"10px",width:"120px"}}>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);


  function changeState(activeKey)
  {
    setTab(activeKey)
  }
 console.log(activeTab)
var result=<Conversations/>
if(activeTab==1){
  result=<Conversations/>
}
else if(activeTab==2){
  result=<LiveScripts/>
}
else if (activeTab==3){
  result=<Members/>
}
else if (activeTab==4){
  result=<Profile/>
}
    return (
      <div>
        <Layout>
          <Header>
            <Button style={{width:"8%",color:"#fff",float:"left",margin:"20px",background:"#8190A5",fontSize:"15px"}}>Logo</Button>
            <Tabs float="left"  height="100px" width="70px" onChange={(activeKey)=>{changeState(activeKey)}}  >
              <TabPane tab="Conversations" key="1"/>
              <TabPane tab="Live Scripts" key="2"/>
              <TabPane tab="Members" key="3"/>
            </Tabs>
              <Icon type="smile" theme="filled" onClick={()=>changeState("4")} style={{fontSize:"50px",float:"right",margin:"10px",color:"#E5E9F2",background:"#000",borderRadius:"100%"}}/>
            <Dropdown   overlay={menu} trigger={['click']} >
            <Icon type="bell" theme="filled"  style={{fontSize:"40px",margin:"15px",float:"right"}}/>
            </Dropdown>
             </Header>
          {result}
        </Layout>
      </div>
    )
}
