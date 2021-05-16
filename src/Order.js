import React from 'react';
import './Order.css';
import moment from 'moment';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct.js'
import NumberFormat from 'react-number-format';


function Order({ order }) {
	

	return (
		<div className="order">
			<h2>Order</h2>
			<p>
				{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}
			</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>

			<FlipMove>
				{order.data.basket?.map(item =>(
					<CheckoutProduct
						key={item.id} 
						id={item.id}
						image={item.image}
						title={item.title}
						price={item.price}
						rating={item.rating}
						hideButton
					/>
				))}
			</FlipMove>

			<NumberFormat
				renderText={(value,props)=>(
					<h3 className="order__total">Order Total: <strong>{value}</strong></h3>
				)} 
				decimalScale={2}
				value={order.data.amount /100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

		</div>
	)
}

export default Order;