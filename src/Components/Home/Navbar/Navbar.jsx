import React, { useState } from "react";

import { assets } from "../../../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router";
import { BsArrowBarLeft } from "react-icons/bs";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-6 font-medium">
      <Link to={"/"}>
        <img className="w-36" src={assets?.logo} alt="forever-logo" />
      </Link>
      {/*  */}
      <ul className="hidden md:flex gap-5 tsxt-sm text-gray-700 font-medium">
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? "underlin" : ""}>Home</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection">
            {({ isActive }) => (
              <span className={isActive ? "underline" : ""}>Collection</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            {({ isActive }) => (
              <span className={isActive ? "underline" : ""}>About</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "underline" : ""}>Contact</span>
            )}
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets?.search_icon} className="w-5 cursor-pointer " alt="" />

        <div className="group relative">
          <img
            src={assets?.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-36 px-5 py-3 bg-slate-100 text-gray-700 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link className={"relative"} to={"/cart"}>
          <img className="w-5 cursor-pointer" src={assets?.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white leading-4  rounded-full text-[8px] aspect-square">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets?.menu_icon}
          className="w-5 sm:hidden"
          alt="small screen menu"
        />
      </div>
      {/* small screen side bar */}
      <div
        className={`absolute  top-0 right-0 bottom-0 overflow-hidden transition-all bg-white ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-3 gap-2 "
          >
            {/* <img src={assets?.} className="w-2" alt="" /> */}
            <BsArrowBarLeft className="font-bold" />
            <p>Back</p>
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white pl-6 py-3 border-t shadow "
                : "pl-6 py-3 border-t shadow "
            }
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white pl-6 py-3 border-t shadow "
                : "pl-6 py-3 border-t shadow "
            }
            onClick={() => setVisible(false)}
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white pl-6 py-3 border-t shadow "
                : "pl-6 py-3 border-t shadow "
            }
            onClick={() => setVisible(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white pl-6 py-3 border-t shadow "
                : "pl-6 py-3 border-t shadow "
            }
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
