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
  const amount = Number(searchParams.get("amount"));

  return <CheckoutForm amount={amount} />;
}

function Page() {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(useSearchParams().get("amount")) * 100,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Elements stripe={stripePromise} options={options}>
        <Checkout />
      </Elements>
    </Suspense>
  );
}

export default Page;
