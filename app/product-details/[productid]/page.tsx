"use client";
import React from "react";
import Breadcrumb from "../_components/Breadcrumb";
import { ShoppingCart, BadgeAlert, BadgeCheck } from "lucide-react";
import ProductList from "../../_components/ProductList";
import ProductSkeleton from "../_components/ProductSkeleton";
import ProductCardSkeleton from "../_components/ProductCardSkeleton";
import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { cartContext } from "../../_context/cartcontext";
import { fetchData } from "@/utils";
import { productData } from "@/types";
import Image from "next/image";

function page({ params }: { params: { productid: number } }) {
  const [productInfo, setProductInfo] = React.useState<productData | undefined>(
    undefined
  );
  const [filterProduct, setFilterProduct] = React.useState<
    productData[] | undefined
  >(undefined);
  const { user } = useUser();
  const router = useRouter();
  //let cartItems = useContext(cartContext);
  console.log(params);
  const searchParams = useSearchParams();
  console.log(searchParams.get("category"));
  async function getProductData() {
    const product = await fetchData<productData>(
      `products/${params.productid}`
    );
    return product;
  }
  async function getFilterProduct() {
    const products = await fetchData<productData[]>(
      `products/category/${searchParams.get("category")}`
    );
    return products;
  }
  const handleAddToCart = () => {
    // if (productInfo.Soldout) {
    //   return;
    // } else {
    //   if (!user) {
    //     window.location.replace("/sign-in");
    //   } else {
    //     console.log("you are signed in");
    //     fetchCartData_();
    //     cartApi
    //       .getCartData(user.primaryEmailAddress.emailAddress)
    //       .then((res) => {
    //         cartItems.setCartData(res.data.data);
    //       });
    //   }
    // }
  };

  React.useEffect(() => {
    async function setdata() {
      const productInfo = await getProductData();
      const productCategory = await getFilterProduct();
      setProductInfo(productInfo.data);
      setFilterProduct(productCategory.data);
    }
    setdata();
  }, [params.productid]);

  return (
    <div className=" container m-auto">
      <Breadcrumb title={productInfo?.title as string} />
      {productInfo !== undefined ? (
        <div className="flex flex-col lg:flex-row p-4 bg-slate-100 rounded-lg gap-10 items-center lg:gap-32 h-3/5">
          {productInfo.image && (
            <Image
              src={productInfo.image}
              width={300}
              height={300}
              alt="product image"
              className="rounded-lg"
            />
          )}
          <div className="p-10">
            <h2 className="capitalize text-3xl text-teal-600">
              {productInfo.title}{" "}
              <span className="text-slate-400 pl-1 underline text-sm">
                {productInfo.category}
              </span>
            </h2>
            <p className="mt-2 text-slate-500">{productInfo.description}</p>
            <p className="text-green-600 flex gap-1 mt-2">
              <BadgeCheck /> In Stock
            </p>
            <p className="text-cyan-600 mt-10 text-lg font-bold">
              {" "}
              Price: {productInfo.price}$
            </p>
            <button
              className={`py-2 px-5 rounded-xl bg-primary text-white mt-4 font-bold flex gap-2`}
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
        {productInfo?.category ? (
          <ProductList fetchData={filterProduct as productData[]} />
        ) : (
          <ProductCardSkeleton />
        )}
      </div>
    </div>
  );
}

export default page;
