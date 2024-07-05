import React from "react";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  //get the cartTotal from the store
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  // Calculate the VAT rate
  const vat = cartTotal * 0.15;

  const cartTotalPrice = cartTotal + vat;

  return (
    <div className="shopping-cart-container">
      <div className="container-right">
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          <div className="order-details">
            <div>
              <p>Subtotal:</p>
            </div>
            <div>
              {/* Show our cart value */}
              <h4>
                R
                {cartTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h4>
            </div>
          </div>

          <div className="order-details">
            {/* Show vat rate */}
            <div>
              <p>VAT (15%):</p>
            </div>
            <div>
              <h4>
                {vat.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h4>
            </div>
          </div>
          <div className="order-details">
            <div>
              <p>Shipping:</p>
            </div>
            <div>
              <h4>Free</h4>
            </div>
          </div>
        </div>
        <h3 className="shipment-options-title">SHIPPING METHOD</h3>
        <div className="delivery-details">
          <div className="ship-method">
            <div className="radio-btn">
              <input type="radio" />
              <div>
                <p>Collection</p>
                <p className="small-text">Hassle free collections</p>
              </div>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#000"
              >
                <path d="M200-650v418q0 14 9 23t23 9h496q14 0 23-9t9-23v-418H588v257l-108-54-108 54v-257H200Zm32 478q-25 0-42.5-17.5T172-232v-417q0-11 3.5-20.5T186-687l66-79q8-11 20-16.5t26-5.5h362q14 0 26.5 5.5T707-766l67 81q7 8 10.5 18t3.5 21v414q0 25-17.5 42.5T728-172H232Zm-17-506h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm185 28v211l80-40 80 40v-211H400Zm-200 0h560-560Z" />
              </svg>
            </span>
          </div>
          <div className="ship-method">
            <div className="radio-btn">
              <input type="radio" />
              <div>
                <p>Delivery</p>
                <p className="small-text">Fast, reliable delivery</p>
              </div>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#000"
              >
                <path d="M223.76-206Q182-206 153-235.17q-29-29.16-29-70.83H76v-382q0-26 17-43t43-17h520v140h84l144 194v108h-60q0 41.67-29.24 70.83-29.23 29.17-71 29.17Q682-206 653-235.17q-29-29.16-29-70.83H324q0 42-29.24 71-29.23 29-71 29Zm.24-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21ZM104-334h24q6-29 33.5-50.5T224-406q33 0 61.5 21t34.5 51h308v-386H136q-12 0-22 10t-10 22v354Zm620 100q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm-68-180h194L724-580h-68v166ZM366-527Z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <p>TOTAL</p>
            <h4>
              {cartTotalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h4>
          </div>
          <button className="order-btn">Proceed to checkout</button>
        </div>
      </div>
    
    </div>
  )
}
