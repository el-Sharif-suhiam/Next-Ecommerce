// @ts-nocheck
"use client";
import React, { Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_component/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY as string
);

function Checkout() {
  const searchParams = useSearchParams();
  return <CheckoutForm amount={Number(searchParams.get("amount"))} />;
}
function page() {
  const options = {
    // passing the client secret obtained from the server
    //clientSecret: "{{CLIENT_SECRET}}",
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get("amount")) * 100,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Suspense fallback={<div>Loading...</div>}>
        <Checkout />
      </Suspense>
    </Elements>
  );
}

export default page;
