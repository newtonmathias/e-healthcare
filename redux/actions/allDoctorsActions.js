import axios from "axios";
import absoluteUrl from 'next-absolute-url'

import { 
    ALL_DOCTORS_FAIL, 
    ALL_DOCTORS_SUCCESS, 
    DOCTOR_DETAILS_FAIL,
    DOCTOR_DETAILS_SUCCESS,
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

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}