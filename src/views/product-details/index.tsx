import { CommonError } from "components/index";
import { Skeleton } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductDetails } from "./queries";
import { IProductCard } from "components/general/ProductCard/interfaces";
import "./style.scss";

const ProductDetails = () => {

  const params = useParams();
  const productId = params.id as string;

  // QUERIES
  const { status, data } =
  useQuery<IProductCard, Error>(
    ["CART", productId],
    () => getProductDetails(productId)
  );

  return (
    <div id="product-details-page" className="page-container">
      {status === "loading" ? (
        <>
          <Skeleton width={400} height={300} />
        </>
      ) : status === "error" ? (
        <CommonError errorType="page-not-found" />
      ) : (
        <div>
          {data && 
            <div className="product">
              <div className="left-col">
                <img alt={data.title} src={data.image} />
              </div>

              <div className="right-col">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p className="price">{data.price}€</p>
              </div>
            </div>}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

