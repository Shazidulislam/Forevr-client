import React, { useContext, useEffect, useState } from "react";
import Title from "../../Gobal/Title/Title";
import ShopContext from "../../../Context/Shop/ShopContext";
import ProductItem from "../../Gobal/ProductItem/ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [foundBestSeller, setFoundBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products?.filter((items) => (items?.bestseller));
    console.log(bestProduct);
    setFoundBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  console.log(foundBestSeller);


  return (
    <div className="my-10">
      <div className=" text-center">
        <div>
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="w-3/4 mx-auto text-center text-xs sm:text-sm md:text-base text-gray-600">
            Discover our most-loved styles — trendy, comfy, and forever
            favorites that everyone’s talking about! Grab yours before they’re
            gone!
          </p>
        </div>
      </div>
       {/* Rendaring Product */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-5 gap-y-6 py-8">
        {foundBestSeller?.map((items, i) => (
          <ProductItem key={i} items={items}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
