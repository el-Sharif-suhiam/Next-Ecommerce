//"use client";
import React, { Suspense } from "react";
import ProductList from "./ProductList";
import ProductCardSkeleton from "../product-details/_components/ProductCardSkeleton";
import { fetchData } from "@/utils";
import { productData } from "@/types";

async function ProductSetion() {
  const products = await fetchData<productData[]>("products", "limit=5");

  return (
    <div>
      <Suspense fallback={<ProductCardSkeleton />}>
        {products.error ? (
          <p>{products.message}</p>
        ) : (
          <ProductList fetchData={products.data as productData[]} />
        )}
      </Suspense>
    </div>
  );
}

export default ProductSetion;
