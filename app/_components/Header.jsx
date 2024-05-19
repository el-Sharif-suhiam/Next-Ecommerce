import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserActivite from "./UserActivite";
function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-xl z-50">
      <div className="mx-auto flex py-4 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image
          src="/logo.svg"
          alt="main logo"
          width="40"
          height="40"
          className="self-start"
        />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm min-w-[380px]">
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
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 w-20"
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
          <UserActivite />
        </div>
      </div>
    </header>
  );
}

export default Header;
