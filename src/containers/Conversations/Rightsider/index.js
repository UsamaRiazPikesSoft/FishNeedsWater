import React from 'react'
import {Avatar, Icon,Switch} from 'antd'
import {connect} from 'react-redux'
import {Change_Active_Ownership} from '../Actions'

function index(props) {
    return (
       
        <div style={{display:"flex",flexDirection:"column"}}>

        <div style={{background:"white",height:"175px",marginBottom:"10px"}}>
            <Avatar  style={{padding:"40px",margin:"10px", marginBottom:"110px",float:"left",background:"#E5E9F2"}}/>
            <h5 style={{padding:"16px",marginBottom:"0px",fontSize:"26px"}}>{props.active.Name}</h5>
            <p style={{fontSize:"16px",marginBottom:"10 px",marginLeft:"85px"}}> <span><Icon type="phone" theme="filled" style={{fontSize:"20px"}}/></span>{props.active.phoneNo}</p>
            <p style={{fontSize:"16px",marginLeft:"85px"}}>  <span><Icon type="mail" theme="filled" style={{fontSize:"16px"}}/></span> {props.active.email}</p>
            <p style={{fontSize:"16px",marginTop:"16px"}}>Lead Source: Rightmove </p>
        </div>

        <div  style={{background:"white",height:"52px",padding:"10px",marginBottom:"10px"}}>
            <p style={{float:"left",fontSize:"20px"}}>Take Ownership</p>
            <Switch  checked={props.ownershipState} onClick={()=>props.changeActiveOwnership()} style={{marginRight:"15px",float:"right",marginTop:"5px"}}  />
        </div>

        <div style={{background:"white"}}>
            <h5 style={{textAlign:"center",margin:"20px 0px",fontSize:"22px",fontWeight:700}}>Other Infromation</h5>
            <div style={{background:"#E9EBEE",height:"155px",margin:"5px 15px"}}></div>
            <div style={{background:"#E9EBEE",height:"155px",margin:"5px 15px"}}></div>
            <div style={{background:"#E9EBEE",height:"104px",margin:"5px 15px"}}></div>
        </div>

        </div>
    )
}
function mapStateToProps(state) {
    return {
    ownershipState: state.conversationReducer.active_ownership,
    active: state.conversationReducer.active_inbox,
    };
  }
function mapDispatchToProps(dispatch){
  
    return{
        changeActiveOwnership:()=>dispatch({type:Change_Active_Ownership})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(index);

