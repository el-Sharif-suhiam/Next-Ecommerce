import Link from "next/link";
import CatagoryBtn from "./_component/CatagoryBtn";
async function fetchProduct() {
  const data = await fetch("http://127.0.0.1:1337/api/products", {
    cache: "no-store",
  });
  const products = await data.json();
  const types = products.data.map((ele) => {
    return ele.attributes.Type;
  });
  console.log("this is the data :", types);
  return types;
}

export default async function layout({ children }) {
  const fetch = await fetchProduct();
  const types = [...new Set(fetch)];
  const Plist = types.map((ele) => {
    return (
      <li className="hover:text-white font-bold  hover:bg-teal-500  text-sm md:text-xl transition md:min-w-[120px]  rounded-lg ">
        <Link href={`/products/${ele}/1`} className="block p-2 pl-4">
          {ele}
        </Link>
      </li>
    );
  });

  return (
    <section className=" pt-2 md:mt-4 shadow  container md:px-4 mx-auto">
      <div className=" flex h-full w-full rounded border-t border-[#eee] ">
        <CatagoryBtn Plist={Plist} />
        {children}
      </div>
    </section>
  );
}
