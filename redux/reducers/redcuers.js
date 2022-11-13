import { authReducer, loadedUserReducer, userReducer } from "./userReducers";
import { combineReducers } from 'redux';
import { docAuthReducer, doctorReducer, loadedDoctorReducer } from "./doctorReducers";
import { allDoctorsReducer, doctorDetailsReducer } from "./allDoctorsReducers";
import { bookedTimesReducer, checkBookingReducer } from "./bookingReducer";

checkBookingReducer
const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer,
    docAuth: docAuthReducer, 
    loadedDoctor: loadedDoctorReducer,
    doctor: doctorReducer,
    allDoctors: allDoctorsReducer,
    doctorDetails:doctorDetailsReducer,
    checkBooking:checkBookingReducer,
    bookedTimes:bookedTimesReducer
})

export default reducer
