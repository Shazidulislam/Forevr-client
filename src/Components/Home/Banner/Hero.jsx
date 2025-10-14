import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row   justify-center items-center border border-gray-400">
      <div className="flex flex-col  items-center flex-1 w-full sm:w-1/2 py-10 sm:py-2">
       <div>
         <div className="flex gap-2 items-center justify-start ">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="text-[#414141] font-semibold text-sm md:text-base "> OUR BESTSELLERS</p>
        </div>
        <h1 className="text-3xl sm:py-3 leading-relaxed sm:text-5xl text-[#414141] font-prata">Latest Arrivals</h1>
        <div className="flex gap-2  items-center justify-start">
             <p className="text-[#414141] font-semibold text-sm md:text-base">SHOP NOW</p>
             <p className="w-8 md:w-11  h-[2px] bg-[#414141]"></p>
        </div>
       </div>
      </div>

      <div className="flex-1">
        <img src={assets?.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
