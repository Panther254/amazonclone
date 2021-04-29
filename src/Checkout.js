import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider.js';

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img className="checkout__ad" src="https://ke.jumia.is/cms/2021/W17/CP/Banners/KE_Cross_PayDay_572x250_copy_2.jpg" alt=""/>
				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>


				</div>
				{basket.map((item)=>(
						<CheckoutProduct 
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}

						/>
				))}

			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>

		</div>
	)
}

export default Checkout;