import React from "react";
import Accessories from "../Photos/Category/Accessories.webp";
import Clothing from "../Photos/Category/Clothing.webp";
import Electronics from "../Photos/Category/Electronics.webp";
import Mobiles from "../Photos/Category/Mobiles.webp";
import Appliances from "../Photos/Category/Appliances.webp";
import Kilos from "../Photos/Category/Kilos.webp";

import styled from "styled-components";
import CustomCarousel from "./utilities/StyledComp";
import AutoSlider from "./utilities/Slider";
import { useNavigate } from "react-router-dom";

import Grose from "../Photos/Grose.png"
import Applian from "../Photos/Applian.png"
import clothes from "../Photos/clothes.png"
import electronics from "../Photos/electronics.png"



const Home = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="bg-gray-100"> 
        <div className="flex flex-row justify-evenly bg-white p-8 pb-6 mt-5 mb-5" >
          <div  className="cursor-pointer" onClick={() => navigate("/products/clothing")}>
            <img src={Clothing} alt="Clothing" className="max-w-[78%]"/>
            <span >Clothing</span>
          </div>
          <div
            onClick={() => navigate("/products/electronics")}
            className="cursor-pointer"
          >
            <img src={Electronics} alt="Electronics" className="max-w-[78%]" />
            <span>Electronics</span>
          </div>
          <div
            onClick={() => navigate("/products/accessories")}
            className="cursor-pointer"
          >
            <img src={Accessories} alt="Accessories" className="max-w-[78%]" />
            <span>Accessories</span>
          </div>
          <div  className="cursor-pointer" onClick={() => navigate("/products/clothing")}>
            <img src={Kilos} alt="Clothing" className="max-w-[78%]"/>
            <span >Kilos</span>
          </div>
          <div onClick={() => navigate("/products/groceries")} className="cursor-pointer">
            <img src={Appliances} alt="Groceries" className="max-w-[78%]" />
            <span>Groceries</span>
          </div>
          <div  className="cursor-pointer" onClick={() => navigate("/products/clothing")}>
            <img src={Mobiles} alt="Clothing" className="max-w-[78%]"/>
            <span >Mobiles</span>
          </div>
        </div>
        <div className="mt-5 mb-8">
        <AutoSlider/>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-row justify-between items-center bg-gray-100 shadow-lg p-6 rounded-lg w-[80%]">
            {[
              { src: clothes, label: "Clothes",path:"/products/clothing" },
              { src: electronics, label: "Electronics" ,path:"/products/electronics"},
              { src: Applian, label: "Accessories" ,path:"/products/accessories"},
              { src: Grose, label: "Groceries" ,path:"/products/groceries"},
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group" onClick={()=>navigate(item.path)}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-24 h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="text-gray-700 font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
