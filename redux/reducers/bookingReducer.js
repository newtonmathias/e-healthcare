import { 
    BOOKED_TIMES_FAIL,
    BOOKED_TIMES_SUCCESS,
    CHECK_BOOKING_FAIL, 
    CHECK_BOOKING_REQUEST, 
    CHECK_BOOKING_RESET, 
    CHECK_BOOKING_SUCCESS, 
    MY_BOOKINGS_FAIL,
    MY_BOOKINGS_SUCCESS,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_DETAILS_FAIL,
    CLEAR_ERRORS,
    DOCTOR_BOOKINGS_SUCCESS,
    DOCTOR_BOOKINGS_FAIL,
    PATIENT_DETAILS_SUCCESS,
    PATIENT_DETAILS_FAIL,
} from "../constants/bookingConstants";
// Check Booking
export const checkBookingReducer = (state = { available: null }, action) => {
    switch (action.type) {

        case CHECK_BOOKING_REQUEST:
            return {
                loading: true
            }

        case CHECK_BOOKING_SUCCESS:
            return {
                loading: false,
                available: action.payload
            }

        case CHECK_BOOKING_RESET:
            return {
                loading: false,
                available: null
            }

        case CHECK_BOOKING_FAIL:
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

// Get all booked times
export const bookedTimesReducer = (state = { times: [] }, action) => {
    switch (action.type) {
        case BOOKED_TIMES_SUCCESS:
            return {
                loading: false,
                times: action.payload
            }

        case BOOKED_TIMES_FAIL:
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

export const bookingsReducer = (state = { bookings: [] }, action) => {
    switch (action.type) {

        case MY_BOOKINGS_SUCCESS:
            return {
                loading: false,
                bookings: action.payload
            }

        case MY_BOOKINGS_FAIL:
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

export const bookingDetailsReducer = (state = { booking: {} }, action) => {
    switch (action.type) {
        case BOOKING_DETAILS_SUCCESS:
            return {
                loading: false,
                booking: action.payload
            }

        case BOOKING_DETAILS_FAIL:
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

export const docBookingsReducer = (state = { bookings: [] }, action) => {
    switch (action.type) {

        case DOCTOR_BOOKINGS_SUCCESS:
            return {
                loading: false,
                bookings: action.payload
            }

        case DOCTOR_BOOKINGS_FAIL:
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

export const patientDetailsReducer = (state = { booking: {} }, action) => {
    switch (action.type) {
        case PATIENT_DETAILS_SUCCESS:
            return {
                loading: false,
                booking: action.payload
            }

        case PATIENT_DETAILS_FAIL:
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