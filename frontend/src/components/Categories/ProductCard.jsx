import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react"; 

const ProductCard = ({ product }) => {
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate); 
    const halfStar = rate % 1 !== 0; 
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex justify-center mt-1">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <Star key={`full-${i}`} size={18} className="text-yellow-400 fill-current" />
          ))}
        {halfStar && <Star size={18} className="text-yellow-400 fill-current opacity-50" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <Star key={`empty-${i}`} size={18} className="text-gray-300 stroke-current" />
          ))}
      </div>
    );
  };

  return (
    <div className="mt-10 flex inline-block gap-10 px-8">
      <Link to="/product" state={{ product }}>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-64 text-center">
        
          <img
            src={product.image}
            alt={product.title}
            className="w-40 h-40 object-cover mx-auto rounded-lg"
          />

         
          <div className="mt-3">
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.sub_category}</p>

          
            {renderStars(product.rating.rate) } <p>{product.rating.rate}({product.rating.count})</p>

          
            <p className="mt-2 text-lg font-bold text-green-600">₹{product.price}</p>

          
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-all">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
