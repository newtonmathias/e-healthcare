import { 
    ALL_DOCTORS_FAIL, 
    ALL_DOCTORS_SUCCESS ,
    DOCTOR_DETAILS_FAIL,
    DOCTOR_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    REVIEW_AVAILABILITY_REQUEST,
    REVIEW_AVAILABILITY_SUCCESS,
    REVIEW_AVAILABILITY_FAIL,
    CLEAR_ERRORS,
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

export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_REVIEW_REQUEST:
            return {
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                success: false
            }

        case NEW_REVIEW_FAIL:
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

export const checkReviewReducer = (state = { reviewAvailable: null }, action) => {
    switch (action.type) {
        case REVIEW_AVAILABILITY_REQUEST:
            return {
                loading: true
            }

        case REVIEW_AVAILABILITY_SUCCESS:
            return {
                loading: false,
                reviewAvailable: action.payload
            }

        case REVIEW_AVAILABILITY_FAIL:
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