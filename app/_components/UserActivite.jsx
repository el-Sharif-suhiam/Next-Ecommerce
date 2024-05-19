"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart, Menu } from "lucide-react";
import cartApi from "../_utils/cartApi";
import { cartContext } from "../_context/cartcontext";
import PopUpCart from "./PopUpCart";
import Link from "next/link";

function UserActivite() {
  const { user } = useUser();
  const [showCart, setShowCart] = React.useState(false);
  const [navShow, setNavShow] = React.useState(false);
  const handleNavBar = () => {
    setNavShow(!navShow);
  };
  const handlePopUpCart = () => {
    setShowCart(!showCart);
  };
  let cartItems = React.useContext(cartContext);

  const itemsNum = async () => {
    const data = cartApi
      .getCartData(user?.primaryEmailAddress?.emailAddress)
      .then((res) => {
        return res.data.data;
      });
    const cartData = await data;
    cartItems.setCartData(cartData);
  };

  React.useEffect(() => {
    user && itemsNum();
  }, [user]);

  return (
    <div className=" w-full flex flex-col items-end">
      {!user ? (
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="block rounded-md bg-primary px-5 py-2.5 text-base font-bold text-white transition hover:bg-teal-500 dark:hover:bg-teal-500"
              href="/sign-in"
            >
              Login
            </Link>

            <Link
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-base font-medium text-teal-500 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              href="/sign-up"
            >
              Register
            </Link>
          </div>

          <button
            onClick={handleNavBar}
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-5 relative">
          <h2 className="flex gap-1 cursor-pointer relative">
            <ShoppingCart
              size={30}
              color="#5e5c64"
              onClick={() => handlePopUpCart()}
            />
            <span className="cart-num">{cartItems.cartData.length}</span>
            {showCart && <PopUpCart showCart={handlePopUpCart} />}
          </h2>
          <UserButton afterSignOutUrl="/" />
          <button
            onClick={handleNavBar}
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}
      {navShow ? (
        <nav aria-label="Global" className="md:hidden mt-4 self-center py-2">
          <ul className="flex flex-col items-center gap-2 text-base">
            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/products"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/about-us"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}{" "}
    </div>
  );
}

export default UserActivite;
