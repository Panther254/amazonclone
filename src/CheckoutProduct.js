import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider.js';



const CheckoutProduct = forwardRef((props, ref) => {
	
	const [{ basket }, dispatch ] = useStateValue();

	const removeFromBasket = () => {dispatch({type: 'REMOVE_FROM_BASKET',id: props.id,})};
	
	return (
		<div className="checkoutProduct" ref={ref}>
			<img src={props.image} alt="" className="checkoutProduct__image"/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">
					{props.title}
				</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{props.price}</strong>
				</p>
				<p className="checkoutProduct__rating">
					{Array(props.rating).fill().map((_,i)=>(<p>⭐</p>))}
				</p>

				{!props.hideButton && (<button onClick={removeFromBasket}>Remove From Basket</button>)}
				
			</div>
		</div>
	)
})

export default CheckoutProduct;