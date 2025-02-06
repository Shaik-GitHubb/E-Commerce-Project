import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Electronics = () => {
  const [minPrice,setMinPrice]=useState("");
  const [maxPrice,setMaxPrice]=useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');  
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const handleMinPriceChange = (e) => {
    if(e.target.value>maxPrice){
      alert("Min Price should be less than Max Price")
      return;
    }
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

 


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  
  useEffect(() => {
    let updatedProducts = products;

    if (minPrice || maxPrice || selectedCategory !== 'All') {
      updatedProducts = products.filter((product) => {
        const isCategoryMatch =
          selectedCategory === 'All' || product.Category.toLowerCase() === selectedCategory.toLowerCase();
        const isMinPriceMatch = minPrice ? product.price >= minPrice : true;
        const isMaxPriceMatch = maxPrice ? product.price <= maxPrice : true;

        return isCategoryMatch && isMinPriceMatch && isMaxPriceMatch;
      });
    }
    setFilteredProducts(updatedProducts);
  }, [minPrice, maxPrice, selectedCategory]);


  const products=[{
    name:"Cotton T-Shirt",
    Category:"Men",
    price:1499,
    Description:"A soft, breathable cotton t-shirt for daily wear.",
    image:"https://uniform7-static.myshopblocks.com/images/2021/06/contain/2048x2048/849abe0ad9018dea67f10859c59eef78.jpg"
  },{
    name:"Floral Summer Dress",
    Category:"Women",
    price:2799,
    Description:"A lightweight floral dress, perfect for summer.",
    image:"http://stylesweekly.com/wp-content/uploads/2016/06/10-best-floral-dresses-for-beautiful-summer-1.jpg"
  },{
    name:"Leather Formal Shoes",
    Category:"Men",
    price:3999,
    Description:"Premium leather shoes, ideal for office or formal occasions.",
    image:"https://images-na.ssl-images-amazon.com/images/I/811dduxFXYL._AC_UL1500_.jpg"
  },{
    name:"Handbag",
    Category:"Women",
    price:2499,
    Description:"Stylish leather handbag with multiple compartments.",
    image:"https://cdn.shopify.com/s/files/1/0527/8626/6275/products/22328_1_d5068156-c49d-469b-b92f-f5685fabe1ff.jpg?v=1611571394"
  },{
    name:"Running Shoes",
    Category:"Kids",
    price:1999,
    Description:"Comfortable running shoes with a durable sole.",
    image:"https://s7d2.scene7.com/is/image/academy/20642872?$pdp-gallery-ng$"
  },{
    name:"Winter Jacket",
    Category:"Men",
    price:3499,
    Description:"Warm and cozy jacket, great for cold weather.",
    image:"https://images-na.ssl-images-amazon.com/images/I/71xOOqWS8SL._AC_UX679_.jpg"
  },{
    name:"Denim Jeans",
    Category:"Women",
    price:2299,
    Description:"High-quality stretchable denim jeans for comfort and style",
    image:"https://images.fcwholesale.com/TR/TR2434-BLUEDENIM-10.jpg"
  }]

  return (
    <div className='bg-gray-100 flex flex-row w-full h-full '>
      <div className='bg-white inline-block my-10 py-10 flex gap-10 px-8 ml-4'>
        <div><h1 className='text-2xl font-medium p'>Filters</h1></div>
        <div className='mt-5 '>Price
          <br />
        <input text="number" value={minPrice} onChange={handleMinPriceChange}  placeholder='Min Price' className='my-2'/>
        <br />
        <input text="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder='Max Price' className='my-2'/>
        </div>
        <div className='mt-4 mb-3'>Category</div>
        <select name="category" id="" onChange={handleCategoryChange} >
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div>
        {
          filteredProducts.map((product)=>{
            return (
              <div className="mt-10 flex inline-block gap-10 px-8">
                <Link to="/product" state={{ product }}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-60 text-center">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-40 h-40 object-cover mx-auto rounded-lg"
                    />
                    <div className="mt-3">
                      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                      <p className="text-sm text-gray-500">{product.Category}</p>
                      <p className="mt-2 text-lg font-bold text-green-600">₹{product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        }
        
      </div>

    </div>
  )
}

export default Electronics