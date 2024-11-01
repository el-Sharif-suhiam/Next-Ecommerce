import React from "react";

function ProductSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row p-4 bg-slate-100 rounded-lg gap-10 items-center lg:gap-32 h-3/5 ">
      <div className="w-[300px] h-[200px] animate-pulse bg-[#ccc] rounded-lg"></div>
      <div>
        <h2 className="w-[190px] h-[30px] animate-pulse bg-[#ccc] my-3 rounded"></h2>
        <p className="w-[400px] md:w-[600px] h-4 animate-pulse bg-[#ccc] my-2 rounded"></p>
        <p className="w-[400px] md:w-[600px] h-4 animate-pulse bg-[#ccc] my-2 rounded"></p>
        <p className="w-[200px] md:w-[300px] h-4 animate-pulse bg-[#ccc] my-2 rounded"></p>
        <p className="w-[150px] h-9 animate-pulse bg-[#ccc] my-4 mt-6 rounded"></p>
      </div>
    </div>
  );
}

export default ProductSkeleton;
