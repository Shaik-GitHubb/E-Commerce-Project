import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser"
import "../App.css"
import loginPhoto from '../Photos/login-photo.png'
import { useNavigate } from 'react-router-dom'



const LoginForm = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [genNum,setGenNum]=useState(0)
    const navigate=useNavigate();



    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log("Email",email,"Password",password)
        alert("Login successful")
    }


  return (
   <div className="flex p-40 bg-gray-100 pt-10 pb-10">
              <div className='w-1/3 flex flex-col bg-blue-600 pt-15'>
                  <span><h2 className='text-white font-bold text-4xl p-5'>Login</h2></span>
                  <span><p className='text-gray-200 p-5'>Get access to your Orders, Wishlist and Recommendations</p></span>
                  <img src={loginPhoto} alt="login-photo" className='pt-30 pb-10 w-1/2 mx-auto'/>
              </div>
              <div  className='w-2/3 bg-white'>
                  <form className='flex flex-col gap-10 mt-10 px-10 pl-20' onSubmit={handleSubmit}>
                      <input type="email" placeholder='Enter Email' className='border-b border-black' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      <input type="password" placeholder='Enter Password' className='border-b border-black' value={password} onChange={(e)=>setPassword(e.target.value)}/>    
                        <button type='submit' className='bg-orange-600 p-2 text-white rounded hover:bg-orange-700 cursor-pointer'>Login</button>
                        <h4 className='mt-10 cursor-pointer mb-10 text-blue-600 mx-auto' onClick={()=>navigate("/register")}>New to Flipkart? <span>Create an account</span></h4>
                  </form>
                  
              </div>
          </div>
  )
}

export default LoginForm