"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";
export default function CatagoryBtn({
  productsList,
}: {
  productsList: JSX.Element[];
}) {
  const [showBtn, setShowBtn] = React.useState(true);
  const handleShowBtn = () => {
    setShowBtn(!showBtn);
  };
  return (
    <aside
      className={`w-[120px] py-5  transition md:visible md:w-52 h-full px-2 md:px-8 flex flex-col items-center justify-start relative ${
        showBtn ? " visible " : "collapse "
      } `}
    >
      <button
        className={`bg-teal-500 p-[1px] rounded-lg md:hidden text-white self-end mb-2 visible absolute ${
          showBtn ? "right-[-30px]" : "right-[-100%] "
        }`}
        onClick={handleShowBtn}
      >
        {showBtn ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <div className="">
        <h2 className="font-bold mb-2 md:text-xl relative border-b border-slate-300 pb-[2px] text-center ">
          Categories{" "}
        </h2>
        <ul className="capitalize text-left md:ml-2 text-slate-700 flex flex-col gap-2 py-2">
          {productsList}
        </ul>
      </div>
    </aside>
  );
}
