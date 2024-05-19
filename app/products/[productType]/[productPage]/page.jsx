import ProductList from "../../../_components/ProductList";
import PaginationBtn from "../../_component/PaginationBtn";
async function getProductByPage(type, page) {
  const respone = await fetch(
    `http://127.0.0.1:1337/api/products?filters[Type][$eq]=${type}&populate=*&pagination[page]=${page}&pagination[pageSize]=2`
  );
  const res = await respone.json();
  console.log(res);
  return res;
}
export default async function ProductsPage({ params }) {
  const page = params.productPage;
  const productData = await getProductByPage(params.productType, page);
  return (
    <div className="min-h-[80vh] py-5 bg-slate-100">
      <ProductList fetchData={productData.data} />

      <PaginationBtn params={params} pagination={productData.meta} />
    </div>
  );
}
