import React, { useState } from 'react'
import Link from 'next/link'

import { getSession, signIn } from 'next-auth/react'

import { toast } from 'react-toastify'
import ButtonLoader from '../components/ButtonLoader';
import Header from '../components/Header';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        })

        setLoading(false)

        if (result.error) {
            toast.error(result.error);
        } else {
            window.location.href = '/'
        }

    }
  return (
    <div>
        <Header/>
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                
                <div className='hidden sm:block'>
                    <img className='w-full h-full object-cover' src="/emergency.jpg" alt="" />
                </div>

                <div className='bg-white flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-color1 p-8 px-8' onSubmit={submitHandler}>
                        <h2 className='text-4xl text-indigo-800 font-bold text-center'>SIGN IN</h2>
                        <div className='flex flex-col py-2'>
                            <label className='text-indigo-800'>Username</label>
                            <input
                            className='rounded-lg bg-white mt-2 p-2 focus:outline-none' 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col text-indigo-800  py-2'>
                            <label className='text-indigo-800'>Password</label>
                            <input
                            className='p-2 rounded-lg mt-2  focus:outline-none' 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className='flex justify-between text-indigo-800 py-2'>
                            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button
                        className='w-full my-5 py-2 bg-gradient-to-b text-color1 bg-indigo-800 hover:bg-indigo-500 transition duration-300 font-semibold'
                        disabled={loading ? true : false}
                        >
                            {loading ? <ButtonLoader /> : 'LOGIN'}
                        </button>
                        <div>
                            <p>Don&apos;t have an account? <Link href='./register'><span className='text-indigo-800 hover:text-indigo-500 transition duration-300 font-bold font-serif cursor-pointer sm:text-sm'>Create account</span></Link></p>
                        </div>                        
                    </form>
                </div>
            </div>
    </div>
  )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }

}