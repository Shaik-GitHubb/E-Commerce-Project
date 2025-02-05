import React from "react";
import Accessories from "../Photos/Category/Accessories.webp";
import Clothing from "../Photos/Category/Clothing.webp";
import Electronics from "../Photos/Category/Electronics.webp";
import Mobiles from "../Photos/Category/Mobiles.webp";
import Appliances from "../Photos/Category/Appliances.webp";

import styled from "styled-components";
import CustomCarousel from "./utilities/StyledComp";



const Home = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="mt-5">
        <CustomCarousel/>
        </div>
        <div className="flex flex-row justify-evenly bg-white p-10">
          <div onClick={() => navigate("/clothing")} className="cursor-pointer">
            <img src={Clothing} alt="Clothing" className="max-w-[78%]" />
            <span>Clothing</span>
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
