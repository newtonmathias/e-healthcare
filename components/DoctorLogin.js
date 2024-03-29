import Link from 'next/link'
import { getSession, signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import { useState } from 'react';
import ButtonLoader from './ButtonLoader';



function DoctorLogin() {
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
        window.location.href = '/doctor/dashboard'
    }

}

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
  <div className="container py-12 px-6 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Welcome to the team</h4>
                </div>
                <form onSubmit={submitHandler}>
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    {loading ? <ButtonLoader /> :
                    <button
                      className="dobutton inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type='submit'
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      disabled={loading ? true : false}
                    >
                      Log in
                    </button>}
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don&apos;t have an account?</p>
                    <Link href='/doctor/register'>
                        <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            >
                            Register
                        </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none doclogin"
            >
              <div className="text-white px-4 py-6 md:p-12 md:mx-6 ">
                <p className="text-xl">
                &rdquo;Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted.&rdquo; 
                <i>– Denis Waitley</i> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default DoctorLogin