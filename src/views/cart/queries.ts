import axios from "axios";

export const getCart = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/cart`);

  return res.data;
};
