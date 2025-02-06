import React from "react";
import Accessories from "../Photos/Category/Accessories.webp";
import Clothing from "../Photos/Category/Clothing.webp";
import Electronics from "../Photos/Category/Electronics.webp";
import Mobiles from "../Photos/Category/Mobiles.webp";
import Appliances from "../Photos/Category/Appliances.webp";

import styled from "styled-components";
import CustomCarousel from "./utilities/StyledComp";
import AutoSlider from "./utilities/Slider";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="bg-gray-100">
        <div className="mt-5 mb-5">
        <AutoSlider/>
        </div>
        <div className="flex flex-row justify-evenly bg-white p-10 mt-5 mb-5" onClick={() => navigate("/clothing")}>
          <div  className="cursor-pointer">
            <img src={Clothing} alt="Clothing" className="max-w-[78%]"/>
            <span >Clothing</span>
          </div>
          <div
            onClick={() => navigate("/electronics")}
            className="cursor-pointer"
          >
            <img src={Electronics} alt="Electronics" className="max-w-[78%]" />
            <span>Electronics</span>
          </div>
          <div
            onClick={() => navigate("/accessories")}
            className="cursor-pointer"
          >
            <img src={Accessories} alt="Accessories" className="max-w-[78%]" />
            <span>Accessories</span>
          </div>
          <div onClick={() => navigate("/appliances")} className="cursor-pointer">
            <img src={Appliances} alt="Appliances" className="max-w-[78%]" />
            <span>Appliances</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
