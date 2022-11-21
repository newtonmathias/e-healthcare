import { authReducer, loadedUserReducer, userReducer } from "./userReducers";
import { combineReducers } from 'redux';
import { docAuthReducer, doctorReducer, loadedDoctorReducer } from "./doctorReducers";
import { allDoctorsReducer, checkReviewReducer, doctorDetailsReducer, newReviewReducer } from "./allDoctorsReducers";
import { bookedTimesReducer, bookingDetailsReducer, bookingsReducer, checkBookingReducer, docBookingsReducer, patientDetailsReducer } from "./bookingReducer";

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
    bookedTimes:bookedTimesReducer,
    bookings: bookingsReducer,
    bookingDetails: bookingDetailsReducer,
    doctorBookings: docBookingsReducer,
    patient: patientDetailsReducer,
    newReview: newReviewReducer,
    checkReview: checkReviewReducer
})

export default reducer
