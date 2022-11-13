import { 
    BOOKED_TIMES_FAIL,
    BOOKED_TIMES_SUCCESS,
    CHECK_BOOKING_FAIL, 
    CHECK_BOOKING_REQUEST, 
    CHECK_BOOKING_RESET, 
    CHECK_BOOKING_SUCCESS, 
    CLEAR_ERRORS
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