import React from 'react'
import './leftsider.css'
import {Input,Dropdown,Button,Icon,Menu, Row,Col,List,Avatar,Select} from 'antd'
import {connect} from 'react-redux'
import  {Change_Active_Inbox} from '../Actions'

const {Search}=Input;
const {Option}=Select;

function index(props) {
    return (
        <div>
            <Search id="searchInput"
            placeholder="Search"
          />
      <Row>
      <Col style={{padding:"10px"}} span={12}>
              <Select
              style={{width:"145px",color:"#000"}}
                placeholder="User Name"
                >
                <Option value="Usama">Usama</Option>
                <Option value="Shakeel">Shakeel</Option>
                <Option value="Ali">Ali</Option>
              </Select>
            </Col>
            <Col style={{padding:"10px 10px 10px 0px"}} span={12}>
            <Select
                placeholder="Status" style={{width:"145px",color:"#000"}}>
                <Option value="value 1">value 1</Option>
                <Option value="value 2">value 2</Option>
                <Option value="value 3">value 3</Option>
              </Select>
            </Col>

            </Row>
        <Row style={{marginBottom:"20px"}}>
          <Col style={{padding:"0px 10px"}} span={12}>
            <Select
                placeholder="Date" style={{width:"145px",color:"#000"}}>
                <Option value="value 1">value 1</Option>
                <Option value="value 2">value 2</Option>
                <Option value="value 3">value 3</Option>
              </Select>            
              </Col>
            <Col style={{paddingRight:"10px"}} span={12}>

            <Select
                placeholder="Property" style={{width:"145px",color:"#000"}}>
                 <Option value="value 1">value 1</Option>
                <Option value="value 2">value 2</Option>
                <Option value="value 3">value 3</Option>
              </Select>
            </Col>
            </Row>
            <List
              itemLayout="horizontal"
              dataSource={
                props.inbox
              }
              renderItem={item => (
                <List.Item onClick={()=>props.changeActiveInbox(item.Id)}   style={item.Id===props.active.Id?{padding:'0px',background:"rgba(233, 235, 238, 0.5)"}:{padding:'0px'}} >
                  <List.Item.Meta 
                    avatar={<Avatar style={{padding:'25px',margin:"10px"}} />}
                    title={item.Name}
                    description={item.Messages[item.Messages.length-1].message}
                  />
                </List.Item>
              )}
            />

        </div>
    )
}
function mapStateToProps(state) {
  return {
  inbox : state.conversationReducer.inbox,
  active: state.conversationReducer.active_inbox,
  search:state.conversationReducer.search,
  loader:state.conversationReducer.loaderState
  };
}
function mapDispatchToProps(dispatch){
  return{
      changeActiveInbox:(id)=>dispatch({type:Change_Active_Inbox,id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index);

