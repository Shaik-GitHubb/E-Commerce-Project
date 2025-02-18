import React from 'react'
import { useCart } from '../Store/cartContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate=useNavigate();
    const {cart,totalPrice,totalItems,removeFromCart}=useCart();
    console.log("cart render",totalItems,totalPrice)
  return (
    <div className='flex flex-row '>
        <div className='ml-20 flex flex-col gap-3 w-2/3'>
            {
                cart?.map((item)=><div key={item._id} className='flex flex-row gap-5 bg-white'>
                    
                    <img src={item.image} alt="" className='w-50 h-40' />
                    <div className='flex flex-col gap-2'>
                    <div className='mt-4 font-bold '>{item.name}</div>
                    <div>Price : ₹{item.price}</div>
                    <div>Quantity: {item.quantity}</div>
                    <div className='bg-red-600 w-17 rounded-md text-white font-medium px-1 cursor-pointer' onClick={()=>{
                        removeFromCart(item);
                    }}>Remove</div>
                    </div>
                    
                </div>)
            }
        </div>
        <div className='w-1/3 bg-white ml-5 h-100'>
        <div className='text-2xl font-bold flex justify-center mt-10'>Total Price : ₹{totalPrice}</div>
        <div className='my-8 flex justify-center font-medium text-xl'>Total Items: {totalItems}</div>
        <div className='my-8 flex justify-center font-bold text-xl text-white bg-green-500 m-10 rounded-xl cursor-pointer py-3' onClick={()=>navigate("/order")}>Add to Payment</div>
        </div>
    </div>
  )
}

export default Cart