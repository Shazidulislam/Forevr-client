import React from "react";
import { Link } from "react-router";

const ProductItem = ({ items }) => {
  const {
    _id,
    image,
    name,
    description,
    price,
  } = items;
  
  return (
    <Link className="text-gray-700 cursor-pointer px-1 sm:px-0" to={`/product/${_id}`}>
      <div className="">
        <div className="flex flex-col justify-between">
          <div className="flex-1">
           <div className=" overflow-hidden rounded-2xl">
             <img className="hover:scale-110 duration-500 transition ease-in-out " src={image[0]} alt="" />
           </div>
          <p className="pt-3 pb-1 text-xs sm:text-sm">{name}</p>
          <p className="text-xs hover:text-amber-600 hover:transition hover:duration-100">{description}</p>
          <p className="text-xl font-semibold py-2 font-prata">${price}  </p>
          </div>
          {/* add to cart */}
          <div className=" flex text-xs gap-2 pl-1 flex-1">
            <button className=" px-2 sm:px-3 py-1 border-2 rounded-full cursor-pointer">Add to Cart</button>
            <button className="px-2 sm:px-3 py-1 border-2 rounded-full cursor-pointer">Chat Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
