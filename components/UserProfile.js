import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updateProfile } from '../redux/actions/userActions';
import { UPDATE_PROFILE_RESET } from '../redux/constants/userConstants';
import ButtonLoader from './ButtonLoader';


function UserProfile() {
    
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

    const { user: loadedUser, loading } = useSelector(state => state.auth)

    const { error, isUpdated, loading: updateLoading } = useSelector(state => state.user)

    console.log(loading);
    
    useEffect(() => {

        if (loadedUser) {
            setUser({
                name: loadedUser.name,
                email: loadedUser.email
            })
            setAvatarPreview(loadedUser.avatar.url)
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            router.push('/');
            dispatch({ type: UPDATE_PROFILE_RESET })
        }

    }, [dispatch, isUpdated, error, loadedUser])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name, email, password, avatar
        }

        dispatch(updateProfile(userData))

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
    <>
    {loading ? <Loader/> :
        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form className="bg-color1 px-6 py-8 rounded shadow-md text-black w-full" onSubmit={submitHandler}>
                            <h1 className="mb-8 text-3xl text-center text-indigo-800">Update Profile</h1>
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
                                disabled={updateLoading ? true : false}
                            >
                                {updateLoading ? <ButtonLoader /> : 'UPDATE'}
                            </button>
                        </form>
                    </div>
                </div>
  }
  </>
  )
}

export default UserProfile;