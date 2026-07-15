import React, { useState } from 'react'
import Forgetpass from './ForgotPassword'

const Login = () => {
    const [show, setShow] = useState(true)
    const [forgotPassword, setForgotPassword] = useState(false)

    function showcolor() {
        setShow(true)
        setForgotPassword(false)
    }

    function hidecolor() {
        setShow(false)
        setForgotPassword(false)
    }

    function handleForgotPassword() {
        setForgotPassword(true)
    }

    function handleBackToLogin() {
        setForgotPassword(false)
        setShow(true)
    }

    return (
        <div className='border border-[#E6DFD5] bg-[#FAF6F0] text-[#4A3E3D] mt-12 md:mt-30 m-auto w-11/12 max-w-md rounded-lg shadow-xl min-h-500px pb-6'>
            {!forgotPassword ? (
                <>
                    <h1 className='text-center text-4xl md:text-5xl font-bold mt-8 text-[#2a2a40]'>
                        {show ? 'Login Form' : 'Signup Form'}
                    </h1>

                    <div className='flex flex-row gap-3 mt-8 justify-center items-center'>
                        <button className={show ? 'btn2' : 'btn1'} onClick={showcolor}>Login</button>
                        <button className={!show ? 'btn2' : 'btn1'} onClick={hidecolor}>Signup</button>
                    </div>

                    {!show && (
                        <div className='p-5 space-y-3'>
                            <div>
                                <label htmlFor='Full Name' className='lb'>Full Name</label>
                                <input type='text' placeholder='Enter your Username' required className='in' />
                            </div>

                            <div>
                                <label htmlFor='Email' className='lb'>Email</label>
                                <input type='email' placeholder='Enter your Email' required className='in' />
                            </div>
                            <div>
                                <label htmlFor='Password' className='lb'>Password</label>
                                <input type='password' placeholder='Enter your Password' required className='in' />
                            </div>
                            <div>
                                <label htmlFor='Confirm Password' className='lb'>Confirm Password</label>
                                <input type='password' placeholder='Confirm your Password' required className='in' />
                            </div>
                            <div>
                                <label htmlFor='securityQuestion' className='lb'>Security Question</label>
                                <select id='securityQuestion' required className='in'>
                                    <option value=''>Select a question</option>
                                    <option value='pet'>What is your favorite pet?</option>
                                    <option value='school'>What is your school name?</option>
                                    <option value='city'>Which city were you born in?</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor='securityAnswer' className='lb'>Answer</label>
                                <input type='text' id='securityAnswer' placeholder='Enter your answer' required className='in' />
                            </div>

                            <div className='flex justify-center pt-4'>
                                <input type='button' value='Submit' className='bg-[#2a2a40] text-[#DEB887] font-bold p-3 rounded-lg shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity' />
                            </div>
                        </div>
                    )}

                    {show && (
                        <div className='p-5 space-y-4'>
                            <div>
                                <label htmlFor='UserName' className='lb'>Username</label>
                                <input type='text' placeholder='Enter your Username' required className='in' />
                            </div>
                            <div>
                                <label htmlFor='Password' className='lb'>Password</label>
                                <input type='password' placeholder='Enter your Password' required className='in' />
                            </div>
                            <div className='text-right font-medium mt-1'>
                                <button
                                    type='button'
                                    onClick={handleForgotPassword}
                                    className='text-[#2a2a40] hover:text-[#DEB887] hover:underline'
                                >
                                    Forgot Password?
                                </button>
                            </div>
                            <div className='flex justify-center pt-4'>
                                <input type='button' value='Submit' className='bg-[#2a2a40] text-[#DEB887] font-bold p-3 rounded-lg shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity' />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <Forgetpass onBackToLogin={handleBackToLogin} />
            )}
        </div>
    )
}

export default Login
