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
          and the Next.js Framework.
        </p>
        <p>This project is a small full-stack app that uses:</p>
        <ul className="list-disc pl-6">
          <li>Next.js 14 as the main framework.</li>
          <li>Tailwind CSS for styling.</li>
          <li>Strapi as the content management system.</li>
          <li>Stripe for payment management.</li>
          <li>Axios library for data fetching.</li>
          <li>Clerk for user management and authentication.</li>
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
