import Cart from "views/cart";
import Home from "views/home";
import ProductDetails from "views/product-details";
import {
  CommonError,
  Footer,
  Navbar,
  RequiredAuth,
} from "components";
import { Route, Routes } from "react-router-dom";

const MainRouter = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        {/* Route not found */}
        <Route path="*" element={<RequiredAuth />}>
          <Route
            path="*"
            element={<CommonError errorType="page-not-found" />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
