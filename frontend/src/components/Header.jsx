import React from 'react'
import NavPhoto from '../Photos/NavPhoto.png'
import plus from '../Photos/plus.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate();
  return (
    <div className='flex gap-10 bg-blue-600 p-5 pt-4'>
        <div className='pl-45 pt-0'>
        <img src={NavPhoto} alt="Navgation Photo" className='w-20 '/>
        <span className='flex flex-row'><p className='text-white '>Explore Plus </p><img src={plus} alt="Plus-Image"  className='w-3 h-3 mt-2 ml-1'/></span>
        </div>
        <div className="relative w-1/2 my-auto">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full p-2 pl-7 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </div>
        <button className='bg-blue-400 text-white p-1 px-7 my-1 py-1 hover:bg-gray-200 ml-1 font-bold text-blue-600 cursor-pointer' onClick={()=>navigate("/login")}>Login</button>
        <div className='flex flex-row'>
        <ShoppingCartOutlinedIcon className='text-white mt-2'style={{fontSize:"40px"}} size="large"/>
        </div>
    </div>
  )
}

export default Header