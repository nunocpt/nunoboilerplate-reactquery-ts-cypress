import {useEffect, useState} from "react";
import CommonError from "components/general/CommonError";
import { ProductCardInCart } from "components/index";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import { useQuery } from "react-query";
import { getCart } from "./queries";
import { IProductCard } from "components/general/ProductCard/interfaces";
import "./style.scss";

const Cart = () => {

  // STATE
  const [cartData, setCartData] = useState<IProductCard[]>([]);


  // QUERIES
  const { status, data } =
  useQuery<IProductCard[], Error>(
    ["CART"],
    () => getCart()
  );


  // USEFFECTS
  useEffect(() => {
    status === "success" && (setCartData(data));
  }, [status]);



  // FUNCTIONS
  const removeProductFromCart = (productId: string) => {
    setCartData(cartData.filter(product => product.id !== productId));
  };

  const changeQuantity = (productId: string, quantity: string) => {
    const newArr = cartData.map(product => {
      if (product.id === productId) {
        return {...product, quantity: quantity};
      }
      return product;
    });

    setCartData(newArr);
  };



  // JSX
  return (
    <div className="page-container" id="cart-page">
      <header className="main-header" data-cy="header">
        <h1>
            My Cart
        </h1>
      </header>
      <section>
        {status === "loading" ? (
          <div className="cart-list">
            <Skeleton width={500} height={500} />
            <Skeleton width={500} height={500} />
          </div>
        ) : status === "error" ? (
          <CommonError errorType="page-not-found" />
        ) : (
          <>
            {cartData && 
              <div className="cart-inner">
                <Button id="checkout-btn" onClick={() => {alert("Checkout not implemented yet");}}>Checkout</Button>
                <div className="cart-list">
                  {cartData.map((product: IProductCard) => (
                    <ProductCardInCart key={product.id} productCardData={product} changeQuantity={changeQuantity} removeProduct={removeProductFromCart} />
                  ))}
                </div>
              </div>
            }
            {(status === "success" && !cartData.length) && <p>Your cart is empty</p>}
          </>
        )}
        <Button id="checkout-btn" onClick={() => {alert("Not implemented yet. But go to db.json file in root, scroll to the bottom, and make the 'cart' array empty");}}>Empty Cart Database</Button>
      </section>
    </div>
  );
};

export default Cart;
