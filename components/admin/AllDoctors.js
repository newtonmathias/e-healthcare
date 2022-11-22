import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { deleteDoctor, getAdminDoctors } from "../../redux/actions/allDoctorsActions";
import Loader from '../Loader';
import { 
    TrashIcon,
    PencilIcon 
} from '@heroicons/react/24/solid';


import React from 'react'
import DataTable from "react-data-table-component";
import { DELETE_DOCTOR_RESET } from "../../redux/constants/allDoctorsConstants";

const AllDoctors = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, error, doctors } = useSelector(state => state.allDoctors)
    const { error: deleteError, isDeleted } = useSelector(state => state.doctor)

    useEffect(() => {

        dispatch(getAdminDoctors())

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            toast.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            router.push('/admin/doctors')
            dispatch({ type: DELETE_DOCTOR_RESET })
        }


    }, [dispatch, deleteError, isDeleted])

    const setDoctors = () => {
        const data = {
            columns: [
                {
                    name: 'Doctor ID',
                    selector: row => row.id,
                    sortable: true,
                },
                {
                    name: 'Name',
                    selector: row => row.name,
                    sortable: true,
                },
                {
                    name: 'Price',
                    selector: row => row.price,
                    sortable: true,
                },
                {
                    name: 'Service',
                    selector: row => row.service,
                    sortable: true,
                },
                {
                    name: 'Actions',
                    selector: row => row.actions,
                    sortable: true,
                }

            ],
            rows: []
        }
        doctors && doctors.forEach(doctor => {
            data.rows.push({
                id: doctor._id,
                name: doctor.name,
                price: `KSh.${doctor.price}`,
                service: doctor.service,
                actions:
                    <div className="flex">
                        <button>
                            <TrashIcon className="h-6 my-6 text-red-600" onClick={() => deleteDoctorHandler(doctor._id)}/>
                        </button>

                    </div>
            })
        })

        return data;
    }

    const data = setDoctors();
    const deleteDoctorHandler = (id) => {
        dispatch(deleteDoctor(id))
    }
  return (
    <div>
        {loading ? <Loader /> :
        <>
            <h1 className="text-lg m-2 text-indigo-800 font-semibold">{doctors.length} Doctors</h1>
            <DataTable 
                columns={data.columns}
                data={data.rows}
            />
        </>
        }
    </div>
  )
}

export default AllDoctors