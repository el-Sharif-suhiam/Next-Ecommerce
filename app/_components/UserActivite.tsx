"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart, Menu } from "lucide-react";
import { fetchData } from "@/utils";
import PopUpCart from "./PopUpCart";
import Link from "next/link";
import { productData, cartType } from "@/types";

function UserActivite() {
  const { user } = useUser();
  const [showCart, setShowCart] = React.useState(false);
  const [navShow, setNavShow] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState<productData[]>([]);

  const handleNavBar = () => {
    setNavShow(!navShow);
  };

  const handlePopUpCart = () => {
    setShowCart(!showCart);
  };

  // Fetching the cart data and products in parallel
  const cartData = async () => {
    try {
      const cartData = await fetchData<cartType>("carts/3");
      if (cartData.data?.products) {
        const productPromises = cartData.data.products.map(async (e) => {
          const newProduct = await fetchData<productData>(
            `products/${e.productId}`
          );
          return newProduct.data as productData;
        });

        // Wait for all product promises to resolve
        const fetchedProducts = await Promise.all(productPromises);
        setCartProducts(fetchedProducts);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  React.useEffect(() => {
    cartData();
  }, []);

  return (
    <div className="w-full flex flex-col items-end">
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
            <Menu />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-5 relative">
          <h2 className="flex gap-1 cursor-pointer relative">
            <ShoppingCart size={30} color="#5e5c64" onClick={handlePopUpCart} />
            <span className="cart-num">{cartProducts.length}</span>
            {showCart && (
              <PopUpCart
                cartProducts={cartProducts}
                showCart={handlePopUpCart}
              />
            )}
          </h2>
          <UserButton afterSignOutUrl="/" />
          <button
            onClick={handleNavBar}
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <span className="sr-only">Toggle menu</span>
            <Menu />
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
      ) : null}
    </div>
  );
}

export default UserActivite;
