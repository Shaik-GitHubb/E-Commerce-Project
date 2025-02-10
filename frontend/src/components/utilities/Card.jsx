import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../Store/cartContext';
import { useAuth } from '../Store/authContext';

const Card = () => {

    const location = useLocation(); // Get the location prop
    const { product } = location.state;
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [maxQuantity, setMaxQuantity] = useState(false);
    const [minQuantity, setMinQuantity] = useState(false);

    const navigate = useNavigate();

    const {user}=useAuth();

    const handleAdd=()=>{
      setQuantity((p)=>{
        if(p<5){
          setMinQuantity(false);
          return p+1
        }
        else{
          setMaxQuantity(true);
          return p
        }
      })
    }

    const handleReduce=()=>{
      setQuantity((p)=>{
        if(p>1){
          setMaxQuantity(false);
          return p-1
        }
        else{
          setMinQuantity(true);
          return p
        }
      })
    }

    const handleAddToCart = () => {
      console.log("user", user);

  if (!user) {
    navigate("/login", { state: { from: "/cart" } });
    return; 
  }

  addToCart({ ...product, quantity });
  navigate("/cart");
      
    }

  return (
    <div className="flex justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg flex p-6 max-w-4xl">
        <div className="flex-none w-1/2 mr-6">
          <img
            src={product.image}
            alt="Product"
            className="w-full h-100 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-all">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {product.Description}
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4">Price: Rs. {product.price}</p>
          <div className="mb-6">
            <span className="text-gray-700 font-medium mr-2">Quantity:</span>
            <div className='flex'>
              <button className='mr-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded' onClick={handleReduce}>-</button>
              {/* <input type="number" value={quantity} className='border' /> */}
              <p>{quantity}</p>
              <button className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded' onClick={handleAdd}>+</button>
              </div>
              {
                maxQuantity?(<p className='text-red-600'>Quantity should be less than Or equal to 5</p>):null
              }
              {
                minQuantity?(<p className='text-red-600'>Quantity cannot be less than 1</p>):null
              }
            
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
