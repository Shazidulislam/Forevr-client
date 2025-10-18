import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 text-sm">
        <div>
          <img src={assets?.logo} className="w-36" alt="" />
          <p className="text-gray-800">
           Forever is your trusted fashion and lifestyle brand, dedicated to bringing comfort, style, and confidence into every aspect of your life. We focus on high-quality materials, innovative designs, and creative solutions that make you stand out. Our mission is to provide exceptional products while ensuring complete customer satisfaction, making every shopping experience enjoyable, seamless, and memorable. With Forever, you’re not just buying fashion — you’re joining a community that values style, authenticity, and happiness
          </p>
        </div>
        <div>
          <h1 className="text-xl font-medium mb-5">COMPANY</h1>
          <ul className="text-gray-800">
            <li>Home</li>
            <li>About As</li>
            <li>Delivary</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className="text-gray-800">
            <h1 className="text-xl font-medium mb-5">GET IN TOTUCH</h1>
            <p>+880160-5199098</p>
            <p>shazidulislam910@gmail.com</p>
        </div>
      </div>
      <div className="pt-6">
        <hr />
        <p className="text-center text-sm pt-6 text-gray-800" >Copyright2025forverv.com All Right Reserves </p>
      </div>
    </div>
  );
};

export default Footer;
