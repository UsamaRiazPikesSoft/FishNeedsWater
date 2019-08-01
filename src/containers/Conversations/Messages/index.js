import React, { Fragment } from 'react'
import {Switch, Avatar,Input,Button,Icon,Tooltip} from 'antd'
import {connect} from 'react-redux'
import './messages.css'
import {Change_New_Message,Send_Message,Make_Chat_Complete} from '../Actions'


function index(props) {
    return (
        
        <div style={{display:"flex",flexDirection:"column"}}>
        
            <div style={{marginBottom:"10px",background:"white"}}>
                    <p style={{margin:"10px",fontSize:"20px",float:"left"}}>{props.active.Name}<span style={{color:"#5A5A5A",marginLeft:"15px",fontSize:"15px"}}>Last active an hour ago</span></p>
                        <Switch checked={props.active_complete_inbox} onClick={()=>props.make_chat_complete()} style={{marginRight:"15px",float:"right",marginTop:"15px"}}  />
            </div>
             <div style={{background:"white"}}>
                <div id="messages" style={{height:"590px",borderBottom:"1px solid #8190A5",marginTop:"40px",overflowY:"scroll"}}>
 

                {props.active.Messages.map(value=>
                value.To===props.active.phoneNo?
                <div  style={{float:"right",width:"70%",margin:" 0px 10px 0px 0px",clear:"both"}}>
                <p style={{marginBottom:"5px",backgroundColor:"#C0CCDA",padding:"20px",borderRadius:"8px",fontSize:"14px"}}>{value.message}</p>   
              </div>:
                   <div style={{margin:"10px",clear:"both"}}>
                   <Avatar style={{float:"left",padding:'25px',marginLeft:"35px",marginTop:"5px",backgroundColor:"#C0CCDA"}}/>
                     <div style={{float:"right",width:"70%",marginRight:"10%"}}>  
                       <p style={{marginBottom:"5px",backgroundColor:"#C0CCDA",padding:"20px",borderRadius:"8px",fontSize:"14px"}}>{value.message}</p> 
                       <p style={{fontSize:"16px",marginBottom:"unset"}}>{props.active.Name}</p>
                      </div> 
                    </div> 
                )
              }
               
                </div>
        <Input value={props.message}  onChange={(e)=>{props.new_message(e.target.value)}} placeholder="Reply" id="messageInput" style={{background:"#fff",width:"500px"}} suffix={
       <Fragment>   
        <Icon onClick={()=>console.log("Sent Message")} type="paper-clip" style={{ color:"#C0CCDA",margin:"7px"}} />
        <Icon onClick={()=>props.send_message()} type="right" style={{ color:"#C0CCDA",margin:"7px" }} />
       </Fragment>
      } style={{border:"unset",fontSize:"22px",height:"60px"}}  />
          </div> 
        </div>
    )
}
function mapStateToProps(state) {
  return { 
  active_complete_inbox:state.conversationReducer.active_complete_inbox, 
  active: state.conversationReducer.active_inbox,
  message:state.conversationReducer.new_message
  };
}
function mapDispatchToProps(dispatch){
  return{
    dispatch,
       new_message:(message)=>dispatch({type:Change_New_Message,message}),
       send_message:()=>dispatch({type:Send_Message}),
       make_chat_complete:()=>dispatch({type:Make_Chat_Complete})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index);

