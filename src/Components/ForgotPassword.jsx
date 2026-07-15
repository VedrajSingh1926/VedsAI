import React from 'react'

const Forgetpass = ({ onBackToLogin }) => {
  return (
    <div className='p-6 space-y-4'>
      <h2 className='text-center text-3xl font-bold text-[#2a2a40]'>Reset Password</h2>
      <p className='text-center text-sm text-[#4A3E3D]'>Answer the same security question from signup to reset your password.</p>

      <div>
        <label htmlFor='resetEmail' className='lb'>Email</label>
        <input type='email' id='resetEmail' placeholder='Enter your Email' required className='in' />
      </div>

      <div>
        <label htmlFor='resetQuestion' className='lb'>Security Question</label>
        <select id='resetQuestion' required className='in'>
          <option value=''>Select a question</option>
          <option value='pet'>What is your favorite pet?</option>
          <option value='school'>What is your school name?</option>
          <option value='city'>Which city were you born in?</option>
        </select>
      </div>

      <div>
        <label htmlFor='resetAnswer' className='lb'>Answer</label>
        <input type='text' id='resetAnswer' placeholder='Enter your answer' required className='in' />
      </div>

      <div>
        <label htmlFor='newPassword' className='lb'>New Password</label>
        <input type='password' id='newPassword' placeholder='Enter a new password' required className='in' />
      </div>

      <div>
        <label htmlFor='confirmNewPassword' className='lb'>Confirm Password</label>
        <input type='password' id='confirmNewPassword' placeholder='Confirm your new password' required className='in' />
      </div>

      <div className='flex flex-col gap-3 pt-2'>
        <button type='button' className='bg-[#2a2a40] text-[#DEB887] font-bold p-3 rounded-lg shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity'>
          Reset Password
        </button>
        <button type='button' onClick={onBackToLogin} className='text-[#2a2a40] font-medium hover:text-[#DEB887] hover:underline'>
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default Forgetpass
