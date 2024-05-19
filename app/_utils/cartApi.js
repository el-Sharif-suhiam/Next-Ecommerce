const { default: axiosClient } = require("./axiosClient");

const fetchCartData = (id, clientName, clientEmail) =>
  axiosClient.post(`/carts`, {
    data: {
      ClientName: clientName,
      ClientEmail: clientEmail,
      products: id,
    },
  });
const getCartData = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=picture&filters[ClientEmail][$eq]=${email}`
  );
const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);
export default { fetchCartData, getCartData, deleteCartItem };
