"use client";
import React from "react";
import { cartContext } from "../_context/cartcontext";
import { ClerkProvider } from "@clerk/nextjs";

//Using this component so i can wrap server component inside client component to use context without losing server rendering advantage
// note for me : pass server component as children not by importing to keep them as server compnent
function Providers({ children }: { children: JSX.Element }) {
  const [cartData, setCartData] = React.useState("");
  const itemsData = {
    cartData: cartData,
    setCartData,
  };
  // made cartContext to fetch the cart data from strapi and save them in State

  return (
    <ClerkProvider>
      <cartContext.Provider value={itemsData}>{children}</cartContext.Provider>
    </ClerkProvider>
  );
}

export default Providers;
