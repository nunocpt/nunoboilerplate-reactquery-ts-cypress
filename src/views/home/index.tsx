import React, { Fragment,useEffect,useRef } from "react";
import { useState } from "react";
import {
  CommonError,
  Loader,
  ProductCard,
  ProductCardSkeleton,
} from "components";
import { useInfiniteQuery,useMutation } from "react-query";
import { queryClient } from "react-query/Query/queryClient";
import { toast } from "react-toastify";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { addProductToCart,getProducts } from "./queries";
import { IProductsInfiniteQuery } from "./interfaces";
import { IProductCard } from "components/general/ProductCard/interfaces";
import "./style.scss";

const Home = () => {
  // STATE
  const [masterLoader, setMasterLoader] = useState<boolean>(false);
  const [productToAddToCart, setProductToAddToCart] = useState<IProductCard | undefined | any>(null);


  // QUERIES
  const { status, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
   useInfiniteQuery<IProductsInfiniteQuery, Error>(
     ["PRODUCTS"],
     ({ pageParam = 0 }) =>
       getProducts(
         pageParam
       ),
     {
       getNextPageParam: (lastPage) => lastPage.nextId ?? false
     }
   );

  const addProductToCartCall = useMutation(
    () =>
      addProductToCart({...productToAddToCart, quantity: "1"}),
    {
      onSuccess: () => {
        setMasterLoader(false);
        setProductToAddToCart(null);
        toast.success("Product added!");
  
        queryClient.invalidateQueries("CART");
      },
      onError: () => {
        setMasterLoader(false);
        setProductToAddToCart(null);
        toast.error("You already have this product in your cart!");
      }
    }
  );





  // useEffects
  useEffect(() => {
    productToAddToCart && (addProductToCartCall.mutate(productToAddToCart));
    productToAddToCart && setMasterLoader(true);
  }, [productToAddToCart]);


  







  // FUNCTIONS
  const loadMoreDivRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useIntersectionObserver({
    target: loadMoreDivRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  const setProductToAddToCartFunction = (product: IProductCard) => {
    setProductToAddToCart(product);
  };







  // JSX
  const skeletonBundle = 
  <>
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
  </>;

  return (
    <>
      <div id="home-page">
        <section id="home-page-banner">
          <div className="banner-text page-container">
            <h1>
            Home page
            </h1>
            <h2>
            Check out our amazing store!
            </h2>
          </div>
        </section>

        <section id="products-overview-wrapper" className="page-container">
          <h2>Super Heroes</h2>
          <div>
            <>
              {status === "error" ? (
                <CommonError errorType="api-error" />
              ) : (
                <div>
                  {status === "loading" ? (
                    <div className="products-grid next-skeletons-products">
                      {skeletonBundle}
                    </div>
                  ) : (
                    <>
                      <div
                        className="products-grid"
                        data-cy="products-details-wrapper">
                        {data?.pages?.map((page) => (
                          <Fragment key={page.nextId}>
                            {page.data.map(
                              (
                                product: IProductCard,
                                index: number
                              ) => (
                                <ProductCard
                                  key={index}
                                  productCardData={product}
                                  addProductToCart={setProductToAddToCartFunction}
                                  data-cy="products-details-wrapper"
                                />
                              )
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </>
            <div
              ref={loadMoreDivRef}
              className="products-grid next-skeletons-products">
              {isFetchingNextPage && (
                skeletonBundle
              )}
            </div>
          </div>
        </section>

      
      </div>

      {masterLoader && <Loader />}
    </>
  );
};

export default Home;

