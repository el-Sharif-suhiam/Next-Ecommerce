"use client";
import React from "react";
import { cartContext } from "../_context/cartcontext";
import Link from "next/link";
import { productData } from "@/types";
function PopUpCart({
  showCart,
  cartProducts,
}: {
  showCart: () => void;
  cartProducts: productData[];
}) {
  const cartItems = React.useContext(cartContext);

  return (
    <div
      className=" z-[999] absolute top-10 sm:h-[400px] h-[350px] md:right-0 right-[-25px] overflow-scroll rounded shadow-md w-[300px] md:w-screen max-w-sm border border-[#999] bg-white  px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <button
        className="absolute right-3 end-4 top-2 text-gray-600 transition hover:scale-110"
        onClick={showCart}
      >
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-3">
          {cartProducts &&
            cartProducts.map((ele) => {
              return (
                <li
                  className="flex border-solid border-[1px] bg-gray-100 border-[#999] p-2 rounded-md items-center gap-4"
                  key={ele.id}
                >
                  <img
                    src={`${ele.image}`}
                    alt="product picture"
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900 line-clamp-1">
                      {ele.title}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline text-xs">Type: </dt>
                        <dd className="inline text-xs ">{ele.category}</dd>
                      </div>

                      <div>
                        <dt className="inline text-xs">Price: </dt>
                        <dd className="inline text-teal-600 text-xs">
                          {ele.price}$
                        </dd>
                      </div>
                    </dl>
                  </div>
                </li>
              );
            })}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block font-bold rounded border border-primary px-5 py-3 text-base text-primary transition hover:ring-1 hover:ring-teal-600"
          >
            View my cart ({cartProducts.length})
          </Link>

          <Link
            href="/cart"
            className="block rounded bg-primary px-5 py-3 text-base text-gray-100 font-bold transition hover:bg-teal-600"
          >
            Checkout
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            onClick={showCart}
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopUpCart;
