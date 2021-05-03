import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider.js';

function Product({key, title, rating, price, image}) {

	const [{ basket } , dispatch] = useStateValue();

	const addToBasket=()=>{
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: key,
				title: title,
				rating: rating,
				price: price,
				image: image,
			},
		})
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
				</div>
			</div>
			<img src={ image } alt="Product"/>
			<button onClick={addToBasket}>Add To Cart</button>
		</div>
	)
}


export default Product;