import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (
          <Link to="/checkout" className="link">
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div class="payment-address">
            <p>{user?.email}</p> <p>14 Millhouse St</p> <p>Toronto, ON</p>
            <p>N6G 3K3</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
            <div className="payment-details"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
