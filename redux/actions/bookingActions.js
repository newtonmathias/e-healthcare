import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
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

export const myBookings = (authCookie, req) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        const config = {
            headers: {
                cookie: authCookie
            }
        }

        const { data } = await axios.get(`${origin}/api/bookings/user`, config)

        dispatch({
            type: MY_BOOKINGS_SUCCESS,
            payload: data.bookings
        })

    } catch (error) {

        dispatch({
            type: MY_BOOKINGS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getBookingDetails = (authCookie, req, id) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        const config = {
            headers: {
                cookie: authCookie
            }
        }

        const { data } = await axios.get(`${origin}/api/bookings/${id}`, config)

        dispatch({
            type: BOOKING_DETAILS_SUCCESS,
            payload: data.booking
        })

    } catch (error) {

        dispatch({
            type: BOOKING_DETAILS_FAIL,
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