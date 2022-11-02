import { authReducer } from "./userReducers";
import { combineReducers } from 'redux';


const reducer = combineReducers({
    auth: authReducer,
})

export default reducer
