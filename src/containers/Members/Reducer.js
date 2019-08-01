import {Add_Member,Remove_Member,SET_NEW_MEMBER,Toggle_Member_Modal} from './Actions'
import { produce } from 'immer';
const initialstate={
    members:[
        {
            id:1, name:"shakeel",email:"shakeelzain89@gmail.com", contact:"+92 310 5067211",role:"Admin"
        },
        {
            id:2, name:"Usama",email:"usmama89@gmail.com", contact:"+92 310 7667212",role:"Super Admin"
         },
         {
            id:3, name:"Shehryar",email:"shehryar9@gmail.com", contact:"+92 310 8967213",role:"Manager"
         },
         {
            id:4, name:"Mohsin",email:"mohsin89@gmail.com", contact:"+92 310 5027214",role:"Manager"
         }
    ],
    newMember:{
        name:"",email:"",role:"Admin"
    },
    Add_Member_Modal_State:false
}

export default (state=initialstate, action) =>
    produce(state, draft => {
        switch(action.type){
    
            case Add_Member:
                if(draft.members.length>0)
                   var id=draft.members[draft.members.length-1].id+1;
                else
                   var id=1;
                   var newmember={
                       id:id,
                       ...draft.newMember,
                       contact:"+92 310 502721"+id
                   }
                   draft.members.push(newmember)
                   draft.newMember={name:"",email:"",role:"Admin"};
                return;
           case Remove_Member:
                 draft.members.splice(draft.members.findIndex(todo => todo.id === action.id),1)
                return;
           case SET_NEW_MEMBER:
                draft.newMember[action.key]=action.value
                return;
            case Toggle_Member_Modal:
                draft.Add_Member_Modal_State=!state.Add_Member_Modal_State
                return;

    
        }      
    })