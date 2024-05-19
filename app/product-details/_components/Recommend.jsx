"use client";
import productApis from "../../_utils/productApis";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "../../_components/ProductCard";

function Recommend({ productData, pageParams }) {
  const [filterProduct, getFilterProduct] = useState([]);
  useEffect(() => {
    getProducFilter_(productData);
  }, [pageParams]);
  const getProducFilter_ = (data) => {
    productApis.getProductFilter(data.Type).then((res) => {
      console.log(res.data.data);
      getFilterProduct(res.data.data);
    });
  };

  const productCards = filterProduct.map((data) => (
    <ProductCard cardData={data.attributes} key={data.id} />
  ));
  return (
    <div className=" mt-6 pb-8 p-4 bg-slate-100 rounded-lg ">
      <h3 className="text-slate-500 text-2xl mb-4 underline-offset-1 capitalize">
        {filterProduct[0]?.attributes.Type}
      </h3>
      <div className="md:grid-cols-3 grid-cols-1 grid gap-4">
        {productCards}
      </div>
    </div>
  );
}

export default Recommend;
