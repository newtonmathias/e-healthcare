import axios from "axios";
import absoluteUrl from 'next-absolute-url'

import { 
    ALL_DOCTORS_FAIL, 
    ALL_DOCTORS_SUCCESS, 
    DOCTOR_DETAILS_FAIL,
    DOCTOR_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    REVIEW_AVAILABILITY_REQUEST,
    REVIEW_AVAILABILITY_SUCCESS,
    REVIEW_AVAILABILITY_FAIL,
    CLEAR_ERRORS 
} from "../constants/allDoctorsConstants";

// Get all doctors
export const getDoctors = (req) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        const { data } = await axios.get(`${origin}/api/doctors`)

        dispatch({
            type: ALL_DOCTORS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_DOCTORS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get doctor details
export const getDoctorDetails = (req, id) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        const { data } = await axios.get(`${origin}/api/doctors/${id}`)

        dispatch({
            type: DOCTOR_DETAILS_SUCCESS,
            payload: data.doctor
        })

    } catch (error) {
        dispatch({
            type: DOCTOR_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/reviews`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

export const checkReviewAvailability = (doctorId) => async (dispatch) => {
    try {

        dispatch({ type: REVIEW_AVAILABILITY_REQUEST })

        const { data } = await axios.get(`/api/reviews/check_review_availability?doctorId=${doctorId}`)

        dispatch({
            type: REVIEW_AVAILABILITY_SUCCESS,
            payload: data.isReviewAvailable
        })

    } catch (error) {
        dispatch({
            type: REVIEW_AVAILABILITY_FAIL,
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