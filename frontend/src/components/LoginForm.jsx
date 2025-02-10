import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser"
import "../App.css"
import loginPhoto from '../Photos/login-photo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Store/authContext'
import { useLocation } from 'react-router-dom'



const LoginForm = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {setUser,login,user} = useAuth();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        { email, password },
        { withCredentials: true } // Important: Ensures cookies are sent
      );

    // const response=login(email,password)

      if (response.status === 200) {
        console.log(response)
        setUser(response.data.user);
        alert("Login successful");
        navigate(location.state?.from || "/"); // Redirect to a protected route
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data?.message || err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

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
                        {error && <p className='text-red-600'>{error}</p>} 
                        <button type='submit' className='bg-orange-600 p-2 text-white rounded hover:bg-orange-700 cursor-pointer'>Login</button>
                        <h4 className='mt-10 cursor-pointer mb-10 text-blue-600 mx-auto' onClick={()=>navigate("/register")}>New to Flipkart? <span>Create an account</span></h4>
                  </form>
                  
              </div>
          </div>
  )
}

export default LoginForm