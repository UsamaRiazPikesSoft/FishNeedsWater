import {Set_Active_Tab,Toggle_Member_Modal} from '../Actions/applicationActions'
const initialState={
active_tab:"conversations",
Add_Member_Modal_open:false
}
export default (state=initialState,action)=>{
switch(action.type){
    case Set_Active_Tab:
        return{
            ...state,
            active_tab:action.value
        }
        case Toggle_Member_Modal:
            return{
                ...state,
                Add_Member_Modal_open:!state.Add_Member_Modal_open
            }

    default:
        return state
}
}