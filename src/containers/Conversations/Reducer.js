import {Change_Active_Inbox,Change_New_Message,Send_Message,Make_Chat_Complete,
    Change_Active_Ownership,Change_Search} 
    from './Actions'
import produce from 'immer'
const initialstate={
inbox:[
    {Id:1,Name:"Usama",phoneNo:"+923058971509",email:"usama@gmail.com",
    Messages:[{To:"+923058971509",From:"+92301122334",message:"Hello Usama this message from Admin"},
            {To:"+923001122334",From:"+923058971509",message:"Hello Admin this message from Usama"}]
    },
    {Id:2,Name:"Shakeel",phoneNo:"+923058971501",email:"shakeel@gmail.com",
    Messages:[{To:"+923058971501",From:"+92301122334",message:"Hello Shakeel this message from Admin"},
            {To:"+923001122334",From:"+923058971501",message:"Hello Admin this message from Shakeel"}]
    },
    {Id:3,Name:"Ali",phoneNo:"+923058971502",email:"ali@gmail.com",
    Messages:[  {To:"+923058971502",From:"+92301122334",message:"Hello Ali this message from Admin"},
            {To:"+923001122334",From:"+923058971502",message:"Hello Admin this message from Ali"}]
    },
    {Id:4,Name:"Mohsin",phoneNo:"+923058971503",email:"mohsin@gmail.com",
    Messages:[ {To:"+923058971503",From:"+92301122334",message:"Hello Mohsin this message from Admin"},
            {To:"+923001122334",From:"+923058971503",message:"Hello Admin this message from Mohsin"}]
    },
    {Id:5,Name:"Faizan",phoneNo:"+923058971504",email:"faizan@gmail.com",
    Messages:[ {To:"+923058971504",From:"+92301122334",message:"Hello Faizan this message from Admin"},
            {To:"+923001122334",From:"+923058971504",message:"Hello Admin this message from Faizan"}]
    }
],
active_inbox: {Id:1,Name:"Usama",phoneNo:"+923058971509",email:"usama@gmail.com",
Messages:[{To:"+923058971509",From:"+92301122334",message:"Hello Usama this message from Admin"},
        {To:"+923001122334",From:"+923058971509",message:"Hello Admin this message from Usama"}]
},
active_ownership:false,
active_complete_inbox:false,
new_message:"",
search:"",
loaderState:false,
  
}

export default (state=initialstate, action) =>
    produce(state, draft => {
        switch (action.type) {
            
            case Change_Active_Inbox:
                var activeInbox=draft.inbox.filter(inbox=>inbox.Id===action.id);
                draft.active_inbox=activeInbox[0];
                return;
            case Change_Active_Ownership:
                draft.active_ownership=!draft.active_ownership
                return;
            case Change_New_Message:
                draft.new_message=action.message;
                return;
            case Make_Chat_Complete:
                draft.active_complete_inbox=!draft.active_complete_inbox
                return;
            case Send_Message:
                 var addmessage={
                    To:draft.active_inbox.phoneNo,
                    From:"+923001122334",
                    message:draft.new_message
                }
                draft.inbox[(draft.active_inbox.Id)-1].Messages.push(addmessage)
                draft.active_inbox.Messages.push(addmessage)
                draft.new_message=""
                return;
            case Change_Search:

                return;
        }
    })


