import React from "react";

function ProductCardSkeleton() {
  return (
    <div className=" flex gap-8  flex-wrap justify-center  items-center p-6 h-fit  bg-slate-100">
      <div className="w-[250px] h-[400px] bg-[#ccc] animate-pulse rounded-lg"></div>
      <div className="w-[250px] h-[400px] bg-[#ccc] animate-pulse rounded-lg"></div>
      <div className="w-[250px] h-[400px] bg-[#ccc] animate-pulse rounded-lg"></div>
      <div className="w-[250px] h-[400px] bg-[#ccc] animate-pulse rounded-lg"></div>
      <div className="w-[250px] h-[400px] bg-[#ccc] animate-pulse rounded-lg"></div>
    </div>
  );
}

export default ProductCardSkeleton;
