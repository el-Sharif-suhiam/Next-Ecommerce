import Link from "next/link";
import CatagoryBtn from "./_component/CatagoryBtn";
import { fetchData } from "@/utils";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const categories = await fetchData<string[]>("products/categories");
  const productsList = categories.data?.map((ele) => {
    return (
      <li className="hover:text-white font-bold  hover:bg-teal-500  text-sm md:text-xl transition md:min-w-[120px]  rounded-lg ">
        <Link href={`/products/categories/${ele}`} className="block p-2 pl-4">
          {ele}
        </Link>
      </li>
    );
  });

  return (
    <section className=" pt-2 md:mt-4 shadow  container md:px-4 mx-auto">
      <div className=" flex h-full w-full rounded border-t border-[#eee] ">
        <CatagoryBtn productsList={productsList as JSX.Element[]} />
        {children}
      </div>
    </section>
  );
}
