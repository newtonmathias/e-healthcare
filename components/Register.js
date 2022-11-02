import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'
import ButtonLoader from '../components/ButtonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '../redux/actions/userActions'



function Register() {
    const dispatch = useDispatch()
    const router = useRouter();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    
    const { name, email, password } = user

    const [avatar, setAvatar] = useState('');

    const [avatarPreview, setAvatarPreview] = useState('/default_avatar.jpg');

    const { success, error, loading } = useSelector(state => state.auth)

    useEffect(() => {

        if (success) {
            router.push('/login')
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, success, error])

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name, email, password, avatar
        }

        dispatch(registerUser(userData))

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
            setUser({ ...user, [e.target.name]: e.target.value })
        }

    }

  return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form className="bg-color1 px-6 py-8 rounded shadow-md text-black w-full" onSubmit={submitHandler}>
                            <h1 className="mb-8 text-3xl text-center text-indigo-800">Sign up</h1>
                            <input 
                                type="text"
                                id="name_field"
                                name='name'
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                value={name}
                                onChange={onChange}
                                 />

                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={onChange} 
                                />

                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={onChange} 
                                />

                        <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='flex'>
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

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green text-white bg-indigo-800 hover:bg-indigo-500 transition duration-300 focus:outline-none my-2"
                                disabled={loading ? true : false}
                            >
                                {loading ? <ButtonLoader /> : 'REGISTER'}
                            </button>

                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </form>

                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <a className="no-underline border-b border-blue text-indigo-800 hover:text-indigo-500 transition duration-300" href="../login/">
                                Log in
                            </a>.
                        </div>
                    </div>
                </div>
  )
}

export default Register