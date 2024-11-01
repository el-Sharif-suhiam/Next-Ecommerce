import React from "react";

export default function AboutUs() {
  return (
    <article className="my-20 container mx-auto">
      <h2 className="capitalize border-b-2 border-primary pb-6 text-center text-4xl text-primary font-bold">
        About This Project
      </h2>

      <section className="flex flex-col gap-4 text-lg bg-white mt-10 rounded p-10 px-16 text-gray-700 shadow-lg">
        <p>
          Welcome to my Next.js E-commerce project. My name is{" "}
          <span className="text-red-700 capitalize font-bold">
            AlSharif Suhaim
          </span>{" "}
          and I created this project as a training exercise while learning React
          and the Next.js Framework,
          <span className="text-black font-semibold">
            This project was originally intended to be full stack, using Strapi
            as a content manager(CMS) and backend. However, because I couldn't
            find a free hosting service for the database, I had to resort to
            using a fake API for the site, utilizing this service:{" "}
          </span>
          <a
            href="https://fakestoreapi.com"
            className="text-blue-600 underline"
          >
            fakestoreapi.com
          </a>
        </p>
        <p>This project is a small full-stack app that uses:</p>
        <ul className="list-disc pl-6">
          <li>Next.js 14 as the main framework.</li>
          <li>Tailwind CSS for styling.</li>
          <li className="line-through">
            Strapi as the content management system.
          </li>
          <li>Stripe for payment management.</li>
          <li className="line-through">Axios library for data fetching.</li>
          <li className="line-through">
            Clerk for user management and authentication.
          </li>
        </ul>
        <p>
          The main goal of this project is to work on a full-stack application
          and gain a better understanding of React and Next.js concepts such as
          routing, server and client components, pagination, streaming and
          loading, effective use of hooks, and when to use client-side rendering
          (CSR) versus server-side rendering (SSR) in most cases.
        </p>
        <p>
          This is an experimental project, so all the products in the app are
          fake and only for testing purposes.
        </p>
      </section>
    </article>
  );
}
