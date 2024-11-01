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
  const amount = Number(searchParams.get("amount")) * 100;

  const options = {
    mode: "payment",
    currency: "usd",
    amount: amount,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount / 100} />
    </Elements>
  );
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkout />
    </Suspense>
  );
}

export default Page;
