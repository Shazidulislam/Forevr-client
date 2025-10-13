import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../../../Context/Shop/ShopContext";
import Title from "../../Gobal/Title/Title";
import ProductItem from "../../Gobal/ProductItem/ProductItem";

const LatetestCollecton = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState(products);
  const [viweAll , setViweAll] = useState(false)

  console.log(viweAll)

  useEffect(() => {
    if(viweAll===false){
      setLatestProduct(products.slice(0, 10));
    }
    else{
        setLatestProduct(products);
    }
     
  }, [products , viweAll]);

  return (
    <div className="py-10">
      <div className="flex justify-center items-center">
        <div>
          <Title text1={"LATEST"} text2={"COLLECTION"} />
          <p className="w-3/4 mx-auto text-center text-xs sm:text-sm md:text-base text-gray-600">
            Forever brings you trendy T-shirts, shirts, and baby
            clothes—customized your way! Pick your favorite design, and we’ll
            deliver it anywhere in Bangladesh with fast courier service.
          </p>
        </div>
      </div>

      {/* Rendaring Product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-5 gap-y-6 py-8">
        {latestProduct?.map((items, i) => (
          <ProductItem key={i} items={items}></ProductItem>
        ))}
      </div>
      <div className="">
        {
            viweAll ? <button onClick={()=>setViweAll(true)} className="border px-1 sm:px-3 py-1 rounded-full cursor-pointer">View Less</button>:<button  onClick={()=>setViweAll(false)} className="border px-1 sm:px-3 py-1 rounded-full cursor-pointer">Viwe All</button>
        }
      </div>
    </div>
  );
};

export default LatetestCollecton;
