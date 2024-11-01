import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Providers from "./_components/Providers";
import React, { ReactNode } from "react";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Next Js Store",
  description:
    "Ecommerce project using Next js as training project, This project uses Strapi as content mangment system , stripe as payment system and tailwind CSS for styling",
};

// Made by: Alsharif Suhaim
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-[90vh]">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
