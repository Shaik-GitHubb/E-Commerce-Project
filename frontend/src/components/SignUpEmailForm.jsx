import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser"
import "../App.css"
import loginPhoto from '../Photos/login-photo.png'


const SignUpEmailForm = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    // const [message,setMessage]=useState("")
    const [password,setPassword]=useState("")

    const [otpShow,setOtpShow]=useState(false)
    const [otp,setOtp]=useState("")
    const [genNum,setGenNum]=useState(0)

    useEffect(()=>{
        if(genNum!=0){
            sendEmail(genNum);
        }
    },[genNum])

    const handleSubmit=(e)=>{
        e.preventDefault()

        setGenNum(Math.floor(Math.random()*10000));

        console.log("genNum",genNum)
 
    }

    const sendEmail=(otpGen)=>{
               
        const serviceId = "service_lliup5q"; 
        const templateId = "template_am7le58"; 
        const publicKey = "ygM-o1ocrtMbiWzyD";

        const templateParams={
            to_email:email,
            to_name:name,
            message:otpGen
        };

        // setOtpShow(true);

        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then((response)=>{
            console.log("Email Sent Successfully ",response);
            alert("Email sent successfully")
            setOtpShow(true);
        })
        .catch((error)=>{
            console.log("Error sending email ",error);
        })
    }

    const handleSubmit2=(e)=>{
        e.preventDefault()
        console.log("ran",genNum,"otp",otp)
        if(otp==genNum){
            alert("Email sent successfully")
            setOtp("")
            setOtpShow(false)
            setName("")
            setEmail("")
        }
        else{
            alert("Incorrect OTP")
        }
    }

  return (
   <div className="flex p-10 bg-gray-100">
              <div className='w-1/3 flex flex-col bg-blue-600 pt-15'>
                  <span><h2 className='text-white font-bold text-4xl p-5'>Looks like you're new here!</h2></span>
                  <span><p className='text-gray-200 p-5'>Signup with your email and password</p></span>
                  <img src={loginPhoto} alt="login-photo" className='pt-30 pb-10 w-1/2 mx-auto'/>
              </div>
              <div  className='w-2/3 bg-white'>
                  <form className='flex flex-col gap-10 mt-10 px-10 pl-20' onSubmit={handleSubmit}>
                      <input type="text" placeholder='Enter Full Name' className='border-b border-black' value={name} onChange={(e)=>setName(e.target.value)}/>
                      <input type="email" placeholder='Enter Email' className='border-b border-black' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      <input type="password" placeholder='Enter Password' className='border-b border-black' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      {
                    otpShow ? (
                            <>
                                <input type="text" placeholder="Enter your OTP" className='border-b border-black' value={otp} onChange={(e)=>setOtp(e.target.value)}/>
                                <button onClick={handleSubmit2} className='bg-orange-600 p-2 text-white rounded hover:bg-orange-700 cursor-pointer'>Submit</button>
                            </> 

                        ) : (
                            
                        <button type='submit' className='bg-orange-600 p-2 text-white rounded hover:bg-orange-700 cursor-pointer'>Sign Up</button>
                        )
                     }
                  </form>
                  <h4 className='mt-10 cursor-pointer pb-10 text-blue-600'>Already have an account? <span>Login</span></h4>
              </div>
          </div>
  )
}

export default SignUpEmailForm