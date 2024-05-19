const { default: axiosClient } = require("./axiosClient");

const getProducts = () => axiosClient.get("/products?populate=*");
const getProductData = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductFilter = (type) =>
  axiosClient.get(`/products?filters[Type][$eq]=${type}&populate=*`);

const getProductFilterPage = (type, page) =>
  axiosClient.get(
    `/products?filters[Type][$eq]=${type}&populate=*&pagination[page]=${page}&pagination[pageSize]=2`
  );
export default {
  getProducts,
  getProductData,
  getProductFilter,
  getProductFilterPage,
};
