//"use client";
import React, { Suspense } from "react";
import ProductList from "./ProductList";
import productApis from "../_utils/productApis";
import ProductCardSkeleton from "../product-details/_components/ProductCardSkeleton";
export async function getDataFromStrapi() {
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/products?pagination[page]=1&pagination[pageSize]=5&populate=*",
      {
        cache: "no-store",
      }
    );
    const pages = await res.json();

    return {
      props: { data: pages.data },
    };
  } catch (err) {
    return { props: { data: "failed" } };
  }
}

async function ProductSetion() {
  // const [products, setProducts] = React.useState([]);
  // React.useEffect(() => {
  //   getProducts_();
  // }, []);
  // const getProducts_ = () => {
  //   productApis.getProducts().then((res) => {
  //     //console.log(res.data.data);
  //     setProducts(res.data.data);
  //   });
  // };
  const products = await getDataFromStrapi();
  console.log(products.props.data);

  return (
    <div>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductList fetchData={products.props.data} />
      </Suspense>
    </div>
  );
}

export default ProductSetion;
