import React from 'react'
import { useCart } from '../Store/cartContext'

const Cart = () => {
    const {cart,totalPrice,totalItems}=useCart();
    console.log("cart render")
  return (
    <div className='flex flex-row '>
        <div className='ml-20 flex flex-col gap-3 w-2/3'>
            {
                cart.map((item)=><div className='flex flex-row gap-5 bg-white'>
                    
                    <img src={item.image} alt="" className='w-50 h-40' />
                    <div className='flex flex-col gap-2'>
                    <div className='mt-4 font-bold '>{item.name}</div>
                    <div>Price : ₹{item.price}</div>
                    <div>{item.quantity}</div>
                    </div>
                    
                </div>)
            }
        </div>
        <div className='w-1/3 bg-white ml-5 h-100'>
        <div className='text-2xl font-bold flex justify-center mt-10'>Total Price : ₹{totalPrice}</div>
        <div className='my-8 flex justify-center font-medium text-xl'>Total Items: {totalItems}</div>
        <div className='my-8 flex justify-center font-bold text-xl text-white bg-green-500 m-10 rounded-xl cursor-pointer py-3'>Add to Payment</div>
        </div>
    </div>
  )
}

export default Cart