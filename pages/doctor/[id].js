import React from 'react'
import DoctorDetails from '../../components/DoctorDetails';
import { getDoctorDetails } from '../../redux/actions/allDoctorsActions';
import { getBookedTimes } from '../../redux/actions/bookingActions';
import { wrapper } from '../../redux/store';

function DoctorDetailsPage() {
  return (
    <div>
        <DoctorDetails/>
    </div>
  )
}

export default DoctorDetailsPage

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ req, params }) => {
        await store.dispatch(getDoctorDetails(req, params.id), getBookedTimes(req, params.id));
      });