import React from 'react';
import NumberFormat from 'react-number-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider.js';
import { getBasketTotal } from './reducer.js';
import { useHistory } from 'react-router-dom';


function Subtotal() {
	const [{basket},dispatch] = useStateValue();
	const history = useHistory();

	const proceedToCheckout = () =>{
		history.push('/payment')
	}
	return (
		<div className="subtotal">
			<NumberFormat
				renderText={(value,props)=>(
						<div>
							<p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
							<small className="subtotal__gift">
								<input type="checkbox"/>This order Contains a gift
							</small>
						</div>
				)} 
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={proceedToCheckout}>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal;