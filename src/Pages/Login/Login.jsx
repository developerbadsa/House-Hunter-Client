import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
      const goto = useNavigate()

      const handleLogin = (e)=>{
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value

            const loginData = {
                   email, password
            }

            console.log(loginData)

            axios.get(`http://localhost:3000/users?email=${email}&password=${password}`, {data: loginData})
            .then((res) => {
                 console.log(res.data)
                  if(res.data){
                        toast("Wow Account Logged Successfully")
                        goto('/')
                        return
                  }else{
                        toast('login problem')
                  }
            })
            .catch(err => {
                  console.log(err)
                  toast('login problem')
            })

      }


      return (
            <section className="h-96 lg:h-screen font-poppins ">
                  <div className="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
                        <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
                              <div className="absolute inset-0 lg:bg-[#00000066] " />
                              <img
                                    src="https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                    className="hidden object-cover w-full h-full lg:block"
                              />
                        </div>
                        <ToastContainer />
                        <div className="flex items-center justify-center">
                              <div className="relative max-w-6xl px-4 mx-auto">
                                    <div className="max-w-xl mx-auto lg:max-w-5xl">
                                          <div className="flex flex-wrap items-center -mx-4">
                                                <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                                                      <h2 className="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl ">
                                                            Welcome and join our community
                                                      </h2>
                                                      <p className="text-lg text-left text-gray-200 dark:text-gray-300 ">
                                                            You are welcome here!
                                                      </p>
                                                </div>
                                                <div className="w-full px-4 lg:w-2/5">
                                                      <div className="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 ">
                                                            <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                                                                  Login our account
                                                            </h2>
                                                            <form onSubmit={handleLogin} className="p-0 m-0">
                                                                  <div>
                                                                        <label
                                                                              htmlFor=""
                                                                              className="text-lg font-medium text-gray-700 dark:text-gray-400"
                                                                        >
                                                                              Email:
                                                                        </label>
                                                                        <input
                                                                              type="email"
                                                                              className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                                              name="email"
                                                                              placeholder="Enter your email"
                                                                        />
                                                                  </div>
                                                                  <div className="mt-5">
                                                                        <div>
                                                                              <label
                                                                                    htmlFor=""
                                                                                    className="text-lg font-medium text-gray-700 dark:text-gray-400 "
                                                                              >
                                                                                    Password:
                                                                              </label>
                                                                              <div className="relative flex items-center mt-2">
                                                                                    <input
                                                                                          type="password"
                                                                                          className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                                                          name="password"
                                                                                          placeholder="Enter password"
                                                                                    />
                                                                                    <svg
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          width={16}
                                                                                          height={16}
                                                                                          className="absolute right-0 mr-3 dark:text-gray-50"
                                                                                          fill="currentColor"
                                                                                          viewBox="0 0 16 16"
                                                                                    >
                                                                                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                                                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                                                          <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                                                    </svg>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mt-5 text-right">
                                                                        <a
                                                                              href="#"
                                                                              className="text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-300 dark:hover:text-fuchsia-500"
                                                                        >
                                                                              forgot password?
                                                                        </a>
                                                                  </div>
                                                                  <button
                                                                        className="w-full px-4 py-3 mt-5 font-semibold text-gray-200 bg-fuchsia-500 rounded-lg dark:bg-fuchsia-500 hover:text-fuchsia-200 "
                                                                        type="submit"
                                                                  >
                                                                        LOGIN
                                                                  </button>
                                                                  <div className="flex flex-wrap items-center mt-3 text-sm text-gray-700 lg:text-base lg:mt-5 dark:text-gray-400">
                                                                        Need an account?
                                                                        <Link
                                                                             to={'/register'}
                                                                              className="ml-2 text-base font-semibold text-fuchsia-700 dark:text-fuchsia-300 dark:hover:text-fuchsia-500"
                                                                        >
                                                                              Create an account
                                                                        </Link>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

      );
};

export default Login;