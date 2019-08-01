import React ,{useState} from 'react'
import {Modal, Input,Menu,Button,Select} from 'antd'
import {SET_NEW_MEMBER,Add_Member} from '../Actions'
import {connect} from 'react-redux'
import './modal.css'
const {Option}=Select;
function index(props) {
    var disabledvalue=props.newmember.name!=""&&props.newmember.email!=""?false:true;

    
    return (
        <div>
        <Modal visible={props.value}
        onCancel={()=>props.modalStateChange()}
        footer={null}>
              <div id="main">
                    <h4 id="heading_add">Add Member</h4>
                    <p id="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh vitae...
                    </p>
                    <Input name="name" value={props.newmember.name} onChange={(e)=>{props.set_member(e.target.name,e.target.value)}} className="Input" placeholder="Name"/>
                    <Input name="email" value={props.newmember.email} onChange={(e)=>{props.set_member(e.target.name,e.target.value)}} className="Input" placeholder="Email"/>
                    <Select
                        name="role"
                        value={props.newmember.role}
                        onChange={(e)=>{props.set_member("role",e)}}
                        className="selectRole">
                        <Option value="Admin">Admin</Option>
                        <Option value="Super Admin">Super Admin</Option>
                        <Option value="Manager">Manager</Option>
                    </Select>
                    <Button disabled={disabledvalue} id="CreateButton" type="submit" onClick={()=>{props.modalStateChange();props.add_member()}}>
                            Create
                    </Button>
                </div>
           </Modal>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
      newmember:state.membersReducer.newMember
    }
  }
  const mapDispatchToProps=(disaptch)=>{
    return{
      set_member:(key,value)=>disaptch({type:SET_NEW_MEMBER,key,value}),
      add_member:()=>disaptch({type:Add_Member})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(index)
  
