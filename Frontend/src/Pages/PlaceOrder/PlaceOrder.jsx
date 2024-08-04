import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import './PlaceOrder.css';

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-field">
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Zip code" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${(getTotalCartAmount() === 0) ? 0 : 40}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <p>${getTotalCartAmount() + ((getTotalCartAmount() === 0) ? 0 : 40)}</p>
                    </div>
            </div>
            <button >PROCEED TO CHECKOUT</button>
        </div>
        </div>
      </form>
    </>
  );
};
export default PlaceOrder;
