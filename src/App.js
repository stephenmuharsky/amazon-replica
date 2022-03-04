import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import NotFound from "./NotFound";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KZK9oH2RdAte4e8EAvAtkVbqCclQBh8JW1YtEDN5HvUvy94NL4baFO776dVyA4RQwsDcQWbXlSCy7wghgC4N26D00InHFs3ZA"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS:", authUser);
      if (authUser) {
        //the user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders />]} key={1} />
          <Route path="/login" element={<Login />} key={2} />
          <Route path="/" element={[<Header />, <Home />]} key={3} />
          <Route
            path="/checkout"
            element={[<Header />, <Checkout />]}
            key={4}
          />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
            key={5}
          />
          <Route path="*" element={<NotFound />} key={6} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
