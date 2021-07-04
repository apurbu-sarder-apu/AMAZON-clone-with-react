const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51J0q6mCIDjfXC3q5We30KY9QQuxlqknrkgPIgIF3thEcXsq1Q4ymCdMI06iAw3OU5UgRrQ3qMLQxMPUZn8NhBAuF006GAcDBN0')


//API


//App config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total )

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
    // ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//Listen Command
exports.api = functions.https.onRequest(app)


//Example endpoint
// http://localhost:5001/challenge-a5dc5/us-central1/api