import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser"
import "../App.css"


const EmailForm = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    // const [message,setMessage]=useState("")

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
    <form className='emailForm' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {
                otpShow ? (
                    <div>
                        <input type="text" placeholder="Enter your OTP" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
                        <button onClick={handleSubmit2}>Submit</button>
                    </div> 

                ) : (
                    
                <button type='submit'>Send Email</button>
                )
            }
        
    </form>
  )
}

export default EmailForm