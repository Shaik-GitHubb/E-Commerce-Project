import React from 'react'

const RegisterFrom = () => {
  return (
    <div className="flex p-10 bg-gray-100">
        <div className='w-1/3 flex flex-col bg-blue-600 pt-15'>
            <span><h2 className='text-white font-bold text-4xl p-5'>Looks like you're new here!</h2></span>
            <span><p className='text-gray-200 p-5'>Signup with your email and password</p></span>
            <img src="../Photos/login-photo.png" alt="login-photo" className='pt-65 pb-10'/>
        </div>
        <div  className='w-2/3 bg-white'>
            <form className='flex flex-col gap-10 mt-10 px-10 pl-20'>
                <input type="text" placeholder='Enter Your Name' className='border-b border-black' />
                <input type="email" placeholder='Enter Your Email' className='border-b border-black'/>
                <input type="password" placeholder='Enter Your Password' className='border-b border-black'/>
                <button className='bg-black text-white rounded'>Sign Up</button>
            </form>
            <h4 className='mt-10'>Already have an account? <span>Login</span></h4>
        </div>
    </div>
  )
}

export default RegisterFrom