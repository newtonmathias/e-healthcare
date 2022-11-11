import { 
    ALL_DOCTORS_FAIL, 
    ALL_DOCTORS_SUCCESS ,
    CLEAR_ERRORS,
    DOCTOR_DETAILS_FAIL,
    DOCTOR_DETAILS_SUCCESS
} from "../constants/allDoctorsConstants";


//All doctors reducer
export const allDoctorsReducer = (state = { doctors: [] }, action) => {
    switch (action.type) {
        case ALL_DOCTORS_SUCCESS:
            return {
                doctorsCount: action.payload.doctorsCount,
                resPerPage: action.payload.resPerPage,
                filteredDoctorsCount: action.payload.filteredDoctorsCount,
                doctors: action.payload.doctors
            }
        case ALL_DOCTORS_FAIL:
            return {
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


//Doctor details reducer
export const doctorDetailsReducer = (state = { doctor: {} }, action) => {
    switch (action.type) {
        case DOCTOR_DETAILS_SUCCESS:
            return {
                doctor: action.payload
            }
        case DOCTOR_DETAILS_FAIL:
            return {
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
