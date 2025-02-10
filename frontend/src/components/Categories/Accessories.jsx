import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';

const Accessories = () => {
  const [minPrice,setMinPrice]=useState("");
  const [maxPrice,setMaxPrice]=useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedRating,setSelectedRating]=useState("");
  const [subCategories, setSubCategories] = useState([]);
  

  const handleMinPriceChange = (e) => {
    if(Number(e.target.value)>Number(maxPrice)){
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
    const uniqueSubCategories = [...new Set(
      products
        .filter(product => product.category.toLowerCase() === "accessories")
        .map(product => product.sub_category)
    )];
    console.log("uniqueSubCategories",uniqueSubCategories)

    setSubCategories(uniqueSubCategories);
  }, [products]);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products/add");
        console.log("Fetched Data:", response.data);
        
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          setError("Invalid data format received.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
      } finally {
        console.log(products)
      }
    };

    fetchProducts();
  }, []);
  
  useEffect(() => {
    let updatedProducts = products;

    if(products.length>0){
      updatedProducts = products.filter((product) => {
        return product.category.toLowerCase() === "accessories"; 
      });
      setFilteredProducts(updatedProducts);
      console.log("updatedProducts",updatedProducts)
    }
    
  }, [products]);


  const handleRatingChange = (e) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value); // Handle empty input
  
    if (value !== "" && (value < 0 || value > 5)) {
      alert("Please enter a rating between 0 and 5.");
      return;
    }
  
    setSelectedRating(value);
  };

  useEffect(() => {
    let updatedProducts = products.filter((product) => 
      product.category.toLowerCase() === "accessories" &&
      (selectedCategory === "All" || product.sub_category.toLowerCase() === selectedCategory.toLowerCase()) &&
      (minPrice ? product.price >= minPrice : true) &&
      (maxPrice ? product.price <= maxPrice : true) &&
      (selectedRating ? product.rating.rate >= selectedRating : true) 
    );

    setFilteredProducts(updatedProducts);
  }, [products, minPrice, maxPrice, selectedCategory, selectedRating, subCategories]);



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
        <div className='mt-4'>
          <p>Minimum Rating (0 - 5)</p>
          <input 
            type="number" 
            step="0.1" 
            min="0" 
            max="5"
            value={selectedRating} 
            onChange={handleRatingChange} 
            placeholder="e.g. 4.2" 
            className='my-2'
          />
        </div>

        <div className='mt-4 mb-3'>Category</div>
        <select name="category" id="" onChange={handleCategoryChange} >
          <option value="All">All</option>

          {
            subCategories.map((category)=><option value={category}>{category}</option>)
          }
        </select>
      </div>

      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Accessories