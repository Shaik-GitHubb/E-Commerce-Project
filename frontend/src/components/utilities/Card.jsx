import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../Store/cartContext';
import { useAuth } from '../Store/authContext';
import { Star } from "lucide-react";

const Card = () => {
  const location = useLocation();
  const { product } = location.state;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(false);
  const [minQuantity, setMinQuantity] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAdd = () => {
    setQuantity((p) => {
      if (p < 5) {
        setMinQuantity(false);
        return p + 1;
      } else {
        setMaxQuantity(true);
        return p;
      }
    });
  };

  const handleReduce = () => {
    setQuantity((p) => {
      if (p > 1) {
        setMaxQuantity(false);
        return p - 1;
      } else {
        setMinQuantity(true);
        return p;
      }
    });
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex space-x-1 mt-1">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <Star key={`full-${i}`} size={20} className="text-yellow-400 fill-current" />
          ))}
        {halfStar && <Star size={20} className="text-yellow-400 fill-current opacity-50" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <Star key={`empty-${i}`} size={20} className="text-gray-300 stroke-current" />
          ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row p-6 max-w-5xl w-full space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-all">
            {product.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800">Rs. {product.price}</p>
          <div className="flex items-center space-x-2">
            {renderStars(product.rating.rate)}
            <p className="text-gray-600">{product.rating.rate} ({product.rating.count})</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className='flex items-center space-x-3'>
              <button className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full' onClick={handleReduce}>-</button>
              <p className='text-lg font-semibold'>{quantity}</p>
              <button className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full' onClick={handleAdd}>+</button>
            </div>
          </div>
          {maxQuantity && (<p className='text-red-600 text-sm'>Quantity should be ≤ 5</p>)}
          {minQuantity && (<p className='text-red-600 text-sm'>Quantity cannot be less than 1</p>)}

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
