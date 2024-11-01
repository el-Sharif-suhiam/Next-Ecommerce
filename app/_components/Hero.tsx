import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center relative">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome To You Digital Store.
            <strong className="font-extrabold text-primary sm:block capitalize">
              {" "}
              all your favourite Products Is One Click away{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            See what your store is offer and get what you need right now, while
            you feel the joy of modern online shopping !!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-primary px-12 py-3 text-base font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
              href="/products"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-base font-medium text-primary shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600 sm:w-auto"
              href="/about-us"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
