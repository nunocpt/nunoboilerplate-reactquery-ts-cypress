import axios from "axios";
import { IProductCard } from "components/general/ProductCard/interfaces";

export const getProducts = async (
  pageParam: number
) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/products-${pageParam}`
  );
  
  return res.data;
};

export const addProductToCart = async (product: IProductCard | undefined) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/cart`,
    product
  );

  return res.data;
};
