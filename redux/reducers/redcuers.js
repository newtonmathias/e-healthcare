import { authReducer, userReducer } from "./userReducers";
import { combineReducers } from 'redux';


const reducer = combineReducers({
    auth: authReducer,
    user: userReducer, 
})

export default reducer
