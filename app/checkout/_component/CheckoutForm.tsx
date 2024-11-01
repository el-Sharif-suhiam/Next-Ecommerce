//ts-no-check
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Link from "next/link";
import React, { Suspense } from "react";

function SpinLoading() {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

const CheckoutForm = ({ amount }) => {
  //const cartItems = useContext(cartContext);
  //const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    // Create the PaymentIntent and obtain clientSecret
    const respone = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await respone.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/checkout/payment-confirm/",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto max-w-[900px] flex flex-col justify-center gap-10 rounded-lg p-10 py-20 border-slate-200 border-solid border-[2px] bg-white shadow-2xl"
    >
      <Suspense fallback={<SpinLoading />}>
        <PaymentElement />
        <Link
          href={"/checkout/payment-confirm"}
          className=" py-2 px-6 transition text-center text-primary border-primary border-[2px] border-solid hover:border-primry rounded-lg text-lg font-black hover:bg-primary hover:text-white"
        >
          Submit
        </Link>
      </Suspense>
    </form>
  );
};

export default CheckoutForm;
