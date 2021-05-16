const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51InLs1Hzh5pE7kxpCQef44I4YYLzTrw1CJ88zPrzE9JHVxiqkdzGJv3i6VVvwYAMsHu47EPHU322Eqvg2s9XyNpW00gD8dJoOx')



//API


//APPCONFIG
const app = express();

//MIDDLEWARES
app.use(cors({ origin: true, }));
app.use(express.json());

//API ROUTES
app.get('/', (request, response)=> response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response)=>{
	
	const total = request.query.total;
	
	console.log('This is the request received for the amount of $', total);
	
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd'
	}).catch((error)=>{
		console.log(error.message)
	})

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})
});

//LIST OF COMMANDS
exports.api = functions.https.onRequest(app);

//example endpoint
// http://localhost:5001/clone-64c67/us-central1/api