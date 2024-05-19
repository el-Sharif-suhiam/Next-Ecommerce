import { cartContext } from "../../_context/cartcontext";
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import orderApis from "../../_utils/orderApis";
import cartApi from "../../_utils/cartApi";
const CheckoutForm = ({ amount }) => {
  const cartItems = useContext(cartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    createOrder_();

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
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder_ = () => {
    console.log(cartItems);
    let productsIds = [];
    cartItems.cartData.forEach((ele) => {
      productsIds.push(ele.attributes.products.data[0].id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName,
        amount,
        products: productsIds,
      },
    };
    orderApis.createOrder(data).then((res) => {
      if (res) {
        cartItems.cartData.forEach((ele) => {
          cartApi
            .deleteCartItem(ele?.id)
            .then((res) => {})
            .catch((error) => {
              console.error("you have an error", error);
            });
        });
      }
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto max-w-[900px] flex flex-col justify-center gap-10 rounded-lg p-10 py-20 border-slate-200 border-solid border-[2px] bg-white shadow-2xl"
    >
      <PaymentElement />
      <button className=" py-2 px-6 transition text-primary border-primary border-[2px] border-solid hover:border-primry rounded-lg text-lg font-black hover:bg-primary hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
