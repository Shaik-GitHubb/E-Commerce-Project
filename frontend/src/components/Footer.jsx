import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row gap-10 bg-[#172337] text-white p-10 mt-0 justify-evenly'>
        <div className='flex gap-1 flex-col'>
            <div>ABOUT</div>
            <a href="">Contact Us</a>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Flipkart Stories</a>
            <a href="">Press</a>
            <a href="">Corporate Information</a>
        </div>
        <div className='flex gap-1 flex-col'>
            <div>GROUP COMPANIES</div>
            <a href="">Myntra</a>
            <a href="">Cleartrip</a>
            <a href="">Shopsy</a>
        </div>
        <div className='flex gap-1 flex-col'>
            <div>HELP</div>
            <a href="">Payments</a>
            <a href="">Shipping</a>
            <a href="">Cancellation and Returns</a>
            <a href="">FAQ</a>
        </div>
        <div className='flex gap-1 flex-col'>
            <div>CONSUMER POLICY</div>
            <a href="">Return Policy</a>
            <a href="">Security</a>
            <a href="">Privacy </a>
            <a href="">Sitemap</a>
            <a href="">Terms to use</a>
        </div>
    </div>
  )
}

export default Footer