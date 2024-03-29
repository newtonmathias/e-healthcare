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
    ADMIN_DOCTORS_REQUEST,
    ADMIN_DOCTORS_SUCCESS,
    ADMIN_DOCTORS_FAIL,
    DELETE_DOCTOR_REQUEST,
    DELETE_DOCTOR_SUCCESS,
    DELETE_DOCTOR_FAIL,
    DELETE_DOCTOR_RESET,
    CLEAR_ERRORS 
} from "../constants/allDoctorsConstants";

// Get all doctors
export const getDoctors = (req, location='') => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        const { data } = await axios.get(`${origin}/api/doctors?location=${location}`)

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

// Get all doctors - ADMIN
export const getAdminDoctors= () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_DOCTORS_REQUEST })

        const { data } = await axios.get(`/api/admin/doctors`)

        dispatch({
            type: ADMIN_DOCTORS_SUCCESS,
            payload: data.doctors
        })

    } catch (error) {

        console.log(error);

        dispatch({
            type: ADMIN_DOCTORS_FAIL,
            payload: error.response.data.message
        })
    }
}

//delete doctor
export const deleteDoctor = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_DOCTOR_REQUEST })

        const { data } = await axios.delete(`/api/doctors/${id}`)

        dispatch({
            type: DELETE_DOCTOR_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_DOCTOR_FAIL,
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