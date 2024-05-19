import productApis from "../../_utils/productApis";

async function fetchProduct() {
  const data = await fetch("http://127.0.0.1:1337/api/products");
  const products = await data.json();
  const types = products.data.map((ele) => {
    return ele.attributes.Type;
  });
  console.log("this is the data :", types);
  return types;
}

export default async function ProductPart() {
  const fetch = await fetchProduct();
  const types = [...new Set(fetch)];

  return <div>{}</div>;
}
