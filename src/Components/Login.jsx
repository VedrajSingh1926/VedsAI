import React, { useState } from 'react'

const Login = () => {
    const[show,hide]=useState(true)
    function showcolor(){
        hide(true)
    }
    function hidecolor(){
        hide(false)
    }
  return (
    <>
         <div className='border border-[#E6DFD5] bg-[#FAF6F0] text-[#4A3E3D] mt-12 md:mt-30 m-auto w-11/12 max-w-md rounded-lg shadow-xl min-h-500px pb-6'>
         
             {show ? <><h1 className='text-center text-4xl md:text-5xl font-bold mt-8 text-[#2a2a40]'>Login Form</h1></>: <><h1 className='text-center text-4xl md:text-5xl font-bold mt-8 text-[#2a2a40]'>Signup Form</h1></>}
            
            
            <div className='flex flex-row gap-3 mt-8 justify-center items-center'>
                <button className={show ?'btn2':'btn1'} onClick={showcolor}>Login</button>
                <button className={!show ?'btn2':'btn1'} onClick={hidecolor}>Signup </button>
            </div>
           
           {!show && ( 
            <div className='p-5 '> 
                <div>
                    <label htmlFor="Full Name" className='lb '>Full Name</label>
                    <input type="text" placeholder='Enter your Username' required className='in' />
                </div>
             
                <div>
                    <label htmlFor="Email" className='lb'>Email</label>
                    <input type="email" placeholder='Enter your Email' required className='in' />
                </div>
                <div>
                    <label htmlFor="Password" className='lb'>Password</label>
                    <input type="password" placeholder='Enter your Password' required className='in' />
                </div>
                <div>
                    <label htmlFor="Confirm Password" className='lb'>Confirm Password</label>
                    <input type="password" placeholder='Confirm your Password' required className='in' />
                </div>
                
                <div className='flex justify-center pt-4'>
                    <input type="button" value="Submit" className='bg-[#2a2a40] text-[#DEB887] font-bold p-3 rounded-lg shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity' />
                </div>
            </div>
            )}

            {show && ( 
            <div className='p-5 space-y-4'>
                 <div>
                    <label htmlFor="UserName" className='lb '>Username</label>
                    <input type="text" placeholder='Enter your Username' required className='in' />
                </div>
                <div>
                    <label htmlFor="Password" className='lb'>Password</label>
                    <input type="password" placeholder='Enter your Password' required className='in' />
                </div>
                <div className="text-right font-medium mt-1"> 
                    <a href="#" className="text-[#2a2a40] hover:text-[#DEB887] hover:underline">Forgot Password?</a>
                </div>
                <div className='flex justify-center pt-4'>
                    <input type="button" value="Submit" className='bg-[#2a2a40] text-[#DEB887] font-bold p-3 rounded-lg shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity' />
                </div>
            </div>
            )}
        </div>
    </>
  )
}

export default Login