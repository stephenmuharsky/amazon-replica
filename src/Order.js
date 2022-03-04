import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>

      {order.basket?.map((item, index) =>
        typeof item.mapValue.fields.price.integerValue != "undefined" ? (
          <CheckoutProduct
            id={item.mapValue.fields.id.stringValue}
            title={item.mapValue.fields.title.stringValue}
            image={item.mapValue.fields.image.stringValue}
            price={item.mapValue.fields.price.integerValue}
            rating={Number(item.mapValue.fields.rating.integerValue)}
            hideButton
            key={index}
          />
        ) : (
          <CheckoutProduct
            id={item.mapValue.fields.id.stringValue}
            title={item.mapValue.fields.title.stringValue}
            image={item.mapValue.fields.image.stringValue}
            price={item.mapValue.fields.price.doubleValue}
            rating={Number(item.mapValue.fields.rating.integerValue)}
            key={index}
            hideButton
          />
        )
      )}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order-total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
