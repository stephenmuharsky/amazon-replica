import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db, colRef } from "./firebase";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
//import { collection, doc } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate();

  // const addToDatabase = () => {
  //   colRef
  //     .doc("orders")
  //     .doc(user?.id)
  //     .collection("orders")
  //     .doc(paymentIntent.id)
  //     .set({
  // basket: basket,
  // amount: paymentIntent.amount,
  // created: paymentIntent.created,
  //     });
  // };

  useEffect(() => {
    //generate the Stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe excpects the total in a currency's subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS:", clientSecret);
  const handleSubmit = async (event) => {
    //do all the Stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const addDocument = async (user, paymentIntent, basket) => {
          const ref = doc(db, "orders", user?.uid, "orders", paymentIntent.id);

          const docRef = await setDoc(ref, {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
            .then(() => {
              alert("data added succesfuly");
            })
            .catch((error) => {
              alert("unsuccessful operation. error: ", error);
            });
        };
        addDocument(user, paymentIntent, basket);

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    //Listen for changes in the CardElement
    //display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
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
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
