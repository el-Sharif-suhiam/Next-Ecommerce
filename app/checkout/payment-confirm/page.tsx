import React from "react";
import Link from "next/link";
function PaymentConfirm() {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4">
      <span className="text-green-600 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-36 w-36"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      <h2 className="text-[24px]">Payment Successful !</h2>
      <h2 className="text[17px] text-center mt-6 text-gray-500">
        We sent an email with your order confirmation
      </h2>
      <Link
        href="/"
        className="p-2 px-4 mt-6 text-white font-black text-base rounded-md bg-primary"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PaymentConfirm;
