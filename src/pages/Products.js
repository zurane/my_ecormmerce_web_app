import React from "react";
import { useState } from "react";
import { ProductsData } from "../resources/productData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Snackbar from "@mui/joy/Snackbar";

export default function Products() {
  //Returns the dispatch function from the Redux store.
  const dispatch = useDispatch();

  // We implement a snackbar component from JoyUI on https://mui.com/joy-ui/react-snackbar/
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  // Destructure values from props
  const { vertical, horizontal, open } = state;

  // on buy now click event
  const showSnack = (newState) => {
    setState({ ...newState, open: true });
  };

  const hideSnack = () => {
    setState({ ...state, open: false });
  };

  // Hide snackbar after 4 seconds

  return (
    <div className="page-align">
      <div className="products-container">
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={2000}
          color="success"
          open={open}
          onClose={hideSnack}
          key={vertical + horizontal}
        >
          <div className="snack-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#388e3c"
            >
              <path d="m422.46-323.69 255.85-255.85L650-607.85 422.46-380.31l-114-114L280.15-466l142.31 142.31ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span>Item added to cart</span>
          </div>
        </Snackbar>
        <div className="labels">
          <div>
            <h5>Available Products ( {ProductsData.length} )</h5>
          </div>
        </div>
        <div className="product-row">
          {
            // We map through the productsList we created from the product data file
            ProductsData &&
              ProductsData.map((productItem) => (
                <div className="product-card" key={productItem.productId}>
                  <img
                    src={productItem.productImage}
                    alt={productItem.productDescription}
                  />
                  <div className="product-title-badge">
                    {productItem.productTitle}
                  </div>
                  <div className="product-title">
                    <h5>{productItem.productDescription}</h5>
                  </div>
                  <div className="price-and-btn">
                    <span className="product-price">
                      R{productItem.productPrice}
                    </span>
                    <button
                    className="link"
                      onClick={() =>
                        dispatch(
                          addToCart(productItem.productPrice),
                          showSnack({
                            vertical: "bottom",
                            horizontal: "center",
                          })
                        )
                      }
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}
