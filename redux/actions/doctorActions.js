import axios from 'axios'
import {
    REGISTER_DOCTOR_REQUEST,
    REGISTER_DOCTOR_SUCCESS,
    REGISTER_DOCTOR_FAIL,
    LOAD_DOCTOR_REQUEST,  
    LOAD_DOCTOR_SUCCESS,
    LOAD_DOCTOR_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    CLEAR_ERRORS

} from '../constants/doctorConstants'

// Register doctor
export const registerDoctor = (doctorData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_DOCTOR_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/auth/doctor/register', doctorData, config)

        dispatch({
            type: REGISTER_DOCTOR_SUCCESS
        })

    } catch (error) {

        dispatch({
            type: REGISTER_DOCTOR_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Loader doctor
export const loadDoctor = () => async (dispatch) => {
    try {

        dispatch({ type: LOAD_DOCTOR_REQUEST });

        const { data } = await axios.get('/api/dashboard')

        dispatch({
            type: LOAD_DOCTOR_SUCCESS,
            payload: data.doctor
        })

    } catch (error) {

        dispatch({
            type: LOAD_DOCTOR_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update doctor
export const updateDoctorProfile = (doctorData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put('/api/doctor/profile', doctorData, config)

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success
        })

    } catch (error) {

        dispatch({
            type: UPDATE_PROFILE_FAIL,
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