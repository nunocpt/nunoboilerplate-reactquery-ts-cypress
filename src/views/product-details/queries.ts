import axios from "axios";

export const getProductDetails = async (productId: string) => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/product-details/${productId}`);

  return res.data;
};