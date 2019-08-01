import React  from 'react' 
import {Button,Col,Row, Layout, Avatar, Icon} from 'antd'
import './members.css'
import Modal from "./Modal"
import {connect} from "react-redux"
import {Remove_Member,Toggle_Member_Modal} from './Actions'
const {Content}=Layout

 function Index(props) {

    return (
        <Layout>
            <Content style={{height:"750px",marginLeft:"15px",marginRight:"15px"}}>
        <Row>
            <Col span={4}><h4 id="heading">Members ({props.members.length})</h4></Col>
            <Col span={4}><Button size="lg" id="button" onClick={()=>props.toggleModal()} >Add Member</Button> </Col>
        </Row>
        {
        props.members.map(members=>
        <Row key={members.id} className="mainChilds">
            <Col span={2}> <Avatar style={{padding:"27px"}}/></Col>
            <Col span={5}><h2 style={{padding:"7px"}}>{members.name}</h2></Col>
            <Col span={5} style={{padding:"13px"}}>{members.email}</Col>
            <Col span={4} style={{padding:"13px"}}>{members.contact}</Col>
            <Col span={3} style={{padding:"13px"}}>Sales</Col>
            <Col span={3} style={{padding:"13px"}}>{members.role}</Col>
            <Col span={2}><Icon onClick={()=>props.removeMember(members.id)} className="closeIcon" type="close"/></Col>
        </Row>
            )
        }  
</Content>
<Modal
value={props.modalState}
modalStateChange={()=>{props.toggleModal()}}
/>
</Layout>
    )
}
const mapStateToProps=(state)=>{
    return{
        members:state.membersReducer.members,
        modalState:state.membersReducer.Add_Member_Modal_State
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    removeMember:(id)=>dispatch({type:Remove_Member,id}),
    toggleModal:()=>dispatch({type:Toggle_Member_Modal})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
