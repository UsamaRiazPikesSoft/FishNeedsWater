import { combineReducers } from 'redux';
import conversationReducer from '../../../containers/Conversations/Reducer';
import applicationReducer from "./applicationReducer"
import membersReducer from "../../../containers/Members/Reducer"
export default combineReducers({
conversationReducer,
 applicationReducer,
 membersReducer,
}); 