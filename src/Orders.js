import React, { useState, useEffect } from "react";
import "./Orders.css";
import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  getDocs,
  query,
  get,
} from "firebase/firestore";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  const pullOrderHistory = async () => {
    const ref = collection(db, "orders", user?.uid, "orders");
    const q = query(ref, orderBy("created", "desc"));
    getDocs(q).then((snapshot) => {
      setOrders(snapshot.docs);

      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          amount: doc._document.data.value.mapValue.fields.amount.integerValue,
          basket:
            doc._document.data.value.mapValue.fields.basket.arrayValue.values,
          created:
            doc._document.data.value.mapValue.fields.created.integerValue,
        }))
      );
    });
  };

  useEffect(() => {
    if (user) {
      pullOrderHistory();
      //console.log("User exists");
    } else {
      //console.log("user does not exist");
      setOrders([]);
    }
  }, [user]);
  console.log("Order outside:", orders);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders?.map((order, index) => (
          <Order order={order} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
