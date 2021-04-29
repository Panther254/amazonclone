import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct({id, title, image, price, rating}) {
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="checkoutProduct__image"/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">
					{title}
				</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<p className="checkoutProduct__rating">
					{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
				</p>
				<button>Remove From Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct;