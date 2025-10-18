import React, {  useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Gobal/Title/Title";

export default function Collection() {
  // const { product } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter Options */}

      <div className="min-w-60 ">
        <p onClick={() => setShowFilter(prv=>!prv)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTER
            <img
              src={assets.dropdown_icon}
              className={`h-3 font-bold sm:hidden  ${showFilter ? "rotate-90" : ""}`}
              alt=""
            />
        </p>
        {/* catagory filter start */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-3" value={"Men"} />
            <p>Men</p>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-3" value={"Women"} />
            Women
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-3" value={"Kids"} />
            <p>Kids</p>
          </div>
        </div>
        {/* catagory filter end */}

        {/* subCatagory filter start */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-3" value={"Topwear"} />
            <p>Topwear</p>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-3" value={"Bottomwear"} />
            <p>Bottomwear</p>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-3" value={"Winterwear"} />
            <p>Winterwear</p>
          </div>
        </div>
        {/* subCatagory filter end */}
      </div>
      {/* ui for the right side */}
      <div className="flex-1" >
         <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"}/>
         </div>
      </div>
    </div>
  );
}
