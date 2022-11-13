import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
import { 
    BOOKED_TIMES_FAIL,
    BOOKED_TIMES_SUCCESS,
    CHECK_BOOKING_FAIL, 
    CHECK_BOOKING_REQUEST, 
    CHECK_BOOKING_RESET, 
    CHECK_BOOKING_SUCCESS, 
    CLEAR_ERRORS 
} from '../constants/bookingConstants'

export const checkBooking = ( doctorId, sessionStart, sessionStop ) => async (dispatch) => {
    try {

        dispatch({ type: CHECK_BOOKING_REQUEST });

        let link = `/api/bookings/check?doctorId=${doctorId}&sessionStart=${sessionStart}&sessionStop=${sessionStop}`

        const { data } = await axios.get(link)

        dispatch({
            type: CHECK_BOOKING_SUCCESS,
            payload: data.isAvailable
        })

    } catch (error) {

        dispatch({
            type: CHECK_BOOKING_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getBookedTimes = (id) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/bookings/check_booked_times?doctorId=${id}`)

        dispatch({
            type: BOOKED_TIMES_SUCCESS,
            payload: data.bookedTimes
        })
 
    } catch (error) {

        dispatch({
            type: BOOKED_TIMES_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}