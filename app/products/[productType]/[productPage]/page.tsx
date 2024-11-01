import { productData } from "@/types";
import ProductList from "../../../_components/ProductList";
import { fetchData } from "@/utils";

export default async function ProductsPage({ params }: { params: any }) {
  const page = params.productPage;
  console.log(params);
  const products = await fetchData<productData[]>(`products/category/${page}`);
  return (
    <div className="min-h-[80vh] py-5 bg-slate-100">
      {products.error ? (
        <p>{products.message}</p>
      ) : (
        <ProductList fetchData={products.data as productData[]} />
      )}
    </div>
  );
}
