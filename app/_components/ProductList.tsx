import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "@/types";
function ProductList({ fetchData }: { fetchData: productData[] }) {
  let divBox = fetchData?.map((e) => {
    return <ProductCard key={e.id} cardData={e} />;
  });

  return (
    <div className=" grid grid-cols-1 gap-4 xl:grid-cols-4 lg:gap-8 py-10 p-6 h-[95%] sm:grid-cols-2  bg-slate-100">
      {divBox}
    </div>
  );
}

export default ProductList;
