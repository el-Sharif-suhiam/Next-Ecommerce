import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/types";
function ProductCard({ cardData }: { cardData: productData }) {
  return (
    <Link
      href={`/product-details/${cardData.id}?category=${cardData.category}`}
      className="group relative block overflow-hidden rounded-md"
    >
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <Image
        src={cardData.image}
        alt="product Image"
        width={200}
        height={250}
        className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className=" relative border border-gray-100 bg-white p-6">
        {/* {cardData.attributes.New ? (
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs absolute top-3 right-0 font-medium rounded-s">
            {" "}
            New{" "}
          </span>
        ) : null} */}

        <h3 className="mt-4 text-lg font-medium capitalize text-gray-900 line-clamp-1">
          {cardData.title}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">${cardData.price}</p>
        <hr className="my-2" />
        <p className="mt-1.5 text-sm text-gray-600 line-clamp-2">
          {cardData.description}
        </p>
      </div>

      {/* <form className="mt-4">
          <button className="block w-full rounded bg-primary text-white p-4 text-base font-bold transition hover:scale-105">
            Check
          </button>
        </form> */}
    </Link>
  );
}

export default ProductCard;
