"use client";
import React, { useState, useEffect, useContext, Suspense } from "react";
import Breadcrumb from "../_components/Breadcrumb";
import productApis from "../../_utils/productApis";
import ProductBanner from "../_components/ProductBanner";
import { ShoppingCart, BadgeAlert, BadgeCheck } from "lucide-react";
import ProductList from "../../_components/ProductList";
import ProductSkeleton from "../_components/ProductSkeleton";
import ProductCardSkeleton from "../_components/ProductCardSkeleton";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApi from "../../_utils/cartApi";
import { cartContext } from "../../_context/cartcontext";

function page({ params }) {
  const [productInfo, setProductInfo] = useState("");
  const [filterProduct, getFilterProduct] = useState([]);
  const { user } = useUser();
  const router = useRouter();
  let cartItems = useContext(cartContext);

  const handleAddToCart = () => {
    if (productInfo.Soldout) {
      return;
    } else {
      if (!user) {
        window.location.replace("/sign-in");
      } else {
        console.log("you are signed in");
        fetchCartData_();
        cartApi
          .getCartData(user.primaryEmailAddress.emailAddress)
          .then((res) => {
            cartItems.setCartData(res.data.data);
          });
      }
    }
  };

  useEffect(() => {
    getProductData_();
  }, [params.productid]);

  const getProductData_ = () => {
    productApis.getProductData(params.productid).then((res) => {
      console.log(res.data.data.attributes);
      setProductInfo(res.data.data.attributes);
      getProducFilter_(res.data.data.attributes.Type);
    });
  };

  const getProducFilter_ = (data) => {
    productApis.getProductFilter(data).then((res) => {
      //console.log(res.data.data);
      getFilterProduct(res.data.data);
      //console.log("the user is", user);
    });
  };

  const fetchCartData_ = () => {
    cartApi
      .fetchCartData(
        params.productid,
        user.fullName,
        user.emailAddresses[0].emailAddress
      )
      .then((res) => {})
      .catch((error) => console.error("the error is", error));
  };

  return (
    <div className=" container m-auto">
      <Breadcrumb pageData={productInfo.Title} />
      {productInfo !== "" ? (
        <div className="flex flex-col lg:flex-row p-4 bg-slate-100 rounded-lg gap-10 items-center lg:gap-32 h-3/5">
          {productInfo?.picture?.data?.attributes?.url && (
            <ProductBanner
              bannerInfo={productInfo.picture?.data.attributes.url}
            />
          )}
          <div className="p-10">
            <h2 className="capitalize text-3xl text-teal-600">
              {productInfo.Title}{" "}
              <span className="text-slate-400 pl-1 underline text-sm">
                {productInfo.Type}
              </span>
            </h2>
            <p className="mt-2 text-slate-500">{productInfo.description}</p>
            {productInfo.Soldout ? (
              <p className="text-red-600 flex gap-1 mt-2">
                <BadgeAlert /> Sold Out !
              </p>
            ) : (
              <p className="text-green-600 flex gap-1 mt-2">
                <BadgeCheck /> In Stock
              </p>
            )}
            <p className="text-cyan-600 mt-10 text-lg font-bold">
              {" "}
              Price: {productInfo.price}$
            </p>
            <button
              className={`py-2 px-5 rounded-xl ${
                productInfo.Soldout
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-primary"
              } text-white mt-4 font-bold flex gap-2`}
              onClick={handleAddToCart}
            >
              <ShoppingCart /> Add To Cart
            </button>
          </div>
        </div>
      ) : (
        <ProductSkeleton />
      )}
      <div className="mt-8 bg-slate-100 rounded-lg">
        <h2 className="text-slate-500 text-2xl pb-0 capitalize p-6 m-0">
          similar products
        </h2>
        {productInfo?.Type ? (
          <ProductList fetchData={filterProduct} />
        ) : (
          // <Recommend pageParams={params} productData={productInfo} />
          <ProductCardSkeleton />
        )}
      </div>
    </div>
  );
}

export default page;
