import React, { useState, useEffect } from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider.js';
import CheckoutProduct from './CheckoutProduct.js';
import FlipMove from 'react-flip-move';
import { Link,useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import NumberFormat from 'react-number-format';
import { getBasketTotal } from './reducer.js'
import instance  from './axios.js';
import { db } from './firebase.js';

function Payment() {

	const [{ user, basket }, dispatch] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState('');
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		
		const getClientSecret = async () => {
			const response = await instance({
				method: 'post',
				url: `/payments/create?total=${getBasketTotal(basket)*100}`
			})
			.then(response => { 
				setClientSecret(response.data.clientSecret)
				
			})
			.catch(error =>{
				console.log(error.message)
			})
		}

		getClientSecret();

	},[basket])


	const handleSubmit = async (event) => {
		event.preventDefault();
		
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			}
		}).then(({ paymentIntent }) => {
			db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
				basket: basket,
				amount: paymentIntent.amount,
				created: paymentIntent.created
			});
			setSucceeded(true);
			setError(null);
			setProcessing(false);
			dispatch({
				type: 'EMPTY_BASKET',
			});

			history.replace('/orders');
		}).catch((error) => {
			alert(`${error.message}.Kindly Try Again`);
			console.log(error.message)
		})
	}

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error? e.error.message:"");
	}

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>P.O Box 228-00200</p>
						<p>JKUAT, JUJA</p>
						<p>Gatundu Road(2A)</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items And Delivery</h3>
					</div>
					<div className="payment__items">
						<FlipMove>
							{basket.map((item)=>(
									<CheckoutProduct
										key={item.id} 
										id={item.id}
										image={item.image}
										title={item.title}
										price={item.price}
										rating={item.rating}

									/>
							))}
						</FlipMove>	
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>

					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange}/>
							<div className="payment__priceContainer">
								<NumberFormat
									renderText={(value,props)=>(
										<h3>Order Total: <strong>{value}</strong></h3>
									)} 
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || succeeded || disabled || !clientSecret}>
									<span>{processing?'Processing':'Buy Now'}</span>
								</button>
							</div>
						</form>
						{error && <div>{error}</div>}
					</div>

				</div>
			</div>
		</div>
	)
}

export default Payment;