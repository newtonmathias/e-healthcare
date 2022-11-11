import {
    REGISTER_DOCTOR_REQUEST,
    REGISTER_DOCTOR_SUCCESS,
    REGISTER_DOCTOR_FAIL,
    LOAD_DOCTOR_REQUEST,  
    LOAD_DOCTOR_SUCCESS,
    LOAD_DOCTOR_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
 
    CLEAR_ERRORS

} from '../constants/doctorConstants'

// Doctor Auth reducer
export const docAuthReducer = (state = {  doctor: null }, action) => {
    switch (action.type) {

        case REGISTER_DOCTOR_REQUEST:
            return {
                loading: true
            }

        case LOAD_DOCTOR_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case REGISTER_DOCTOR_SUCCESS:
            return {
                loading: false,
                success: true,
            }
         
            case LOAD_DOCTOR_SUCCESS:
                return {
                    loading: false, 
                    isAuthenticated: true,
                    doctor: action.payload
                }    

        case REGISTER_DOCTOR_FAIL:
            return {
                loading: false,
                error: action.payload
            }

            case LOAD_DOCTOR_FAIL:
                return {
                    loading: false,
                    isAuthenticated: false,
                    error: action.payload
                }
            
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

// Doctor Loaded reducer
export const loadedDoctorReducer = (state = {  doctor: null }, action) => {
    switch (action.type) {

         case LOAD_DOCTOR_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
         
            case LOAD_DOCTOR_SUCCESS:
                return {
                    loading: false, 
                    isAuthenticated: true,
                    doctor: action.payload
                }    

            case LOAD_DOCTOR_FAIL:
                return {
                    loading: false,
                    isAuthenticated: false,
                    error: action.payload
                }
            
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

// Doctor  reducer
export const doctorReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            }

        case UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload,
            }

        case UPDATE_PROFILE_RESET:
            return {
                loading: false,
                isUpdated: false,
            }

        case UPDATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}