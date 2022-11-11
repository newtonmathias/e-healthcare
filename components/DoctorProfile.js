
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import ButtonLoader from '../components/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updateDoctorProfile } from '../redux/actions/doctorActions'
import { UPDATE_PROFILE_RESET } from '../redux/constants/doctorConstants';
import Loader from './Loader';

function DoctorProfile() {
    const dispatch = useDispatch()
    const router = useRouter();

    const [doctor, setDoctor] = useState({
        name: '',
        email: '',
        password: '',
        service:'',
        gender: '',
        specilities:'', 
        location:'',
        price: '',
        desc:'',
        institution:'',
        languanges:'',
    })

    const { name, email, password, service, gender,specilities, location, price, desc, institution, languanges } = doctor

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/default_avatar.jpg');

    const { doctor: loadedDoctor, loading } = useSelector(state => state.docAuth)
    
    const { error, isUpdated, loading: updateloading } = useSelector(state => state.doctor)

    useEffect(() => {

        if (loadedDoctor) {
            setDoctor ({
                name: loadedDoctor.name,
                email: loadedDoctor.email,
                service: loadedDoctor.service,
                gender: loadedDoctor.gender,
                specilities: loadedDoctor.specilities,
                location: loadedDoctor.location,
                price: loadedDoctor.price,
                desc: loadedDoctor.desc,
                institution: loadedDoctor.institution,
                languanges: loadedDoctor.languanges,
            })
            setAvatarPreview (loadedDoctor.avatarPreview)
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (isUpdated) {
            router.push('/doctor/dashboard');
            dispatch({ type: UPDATE_PROFILE_RESET })
        }

    }, [dispatch, isUpdated, error, loadedDoctor])



    const submitHandler = (e) => {
        e.preventDefault();

        const doctorData = {
            name, email, password, service, gender,specilities, location, price, desc, institution, languanges, avatar
        }

        dispatch(updateDoctorProfile(doctorData))

    }

    const onChange = (e) => {

        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result);
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setDoctor({ ...doctor, [e.target.name]: e.target.value })
        }

    }
  return (
    <>
{loading ? <Loader /> : 
<form className='max-w-screen-xl mx-auto p-4' onSubmit={submitHandler}>
  <div className="relative z-0 mb-6 w-full group">
      <input 
        type="email" 
        placeholder='enter email'
        name="email" 
        id="floating_email"         
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        value={email}
         onChange={onChange}
        />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input 
        type="password" 
        name="password" 
        id="floating_password" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required=""
        value={password}
        onChange={onChange}
        />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input 
        type="text" 
        name="name" 
        id="floating_repeat_password" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required=""
        value={name}
        onChange={onChange}
        />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text" 
            name="service" 
            id="floating_first_name" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={service}
            onChange={onChange}
            />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text" 
            name="specilities" 
            id="floating_last_name" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={specilities}
            onChange={onChange}
            />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specilities</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text"  
            name="location" 
            id="floating_phone" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={location}
            onChange={onChange}
            />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text" 
            name="gender" 
            id="floating_company" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={gender}
            onChange={onChange}
            />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text" 
            name="institution" 
            id="floating_company" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={institution}
            onChange={onChange}
            />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">institution</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text" 
            name="languanges" 
            id="floating_company" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={languanges}
            onChange={onChange}
            />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Languages</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="text" 
            name="price" 
            id="floating_company" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required=""
            value={price}
            onChange={onChange}
            />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <textarea 
            name="desc" 
            id="" 
            cols="30" 
            rows="10"
            value={desc}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            onChange={onChange}
        />
            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
    <div className='form-group'>
                            <label htmlFor='avatar_upload'>Profile Picture</label>
                            <div className='flex space-x-15'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}         
                                            className='rounded-lg'
                                            alt='image'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        accept='images/*'
                                        className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
    </div>
  </div>
  <div className='flex'>
    <div>
        <button type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            disabled={updateloading ? true : false}
            >
                {updateloading ? <ButtonLoader /> : 'UPDATE PROFILE'}
        </button>
    </div>
  </div>
                         
</form>
}
</>

  )
}


export default DoctorProfile