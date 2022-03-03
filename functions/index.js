const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KZK9oH2RdAte4e8EPYMpSgwE7YNVZTxCSbPHKozPh3pFN5ZsNDTa3SlcoAFPJLEQtBEEPdm5UH9yAxpR44XdTQc00X6qMk3a9"
);

// API

// APP config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received:", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-57593/us-central1/api
