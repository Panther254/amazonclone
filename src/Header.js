import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase.js';

function Header() {

	const [{ basket, user },dispatch] = useStateValue();

	const handleAuth = e => {
		if (user) {
			auth.signOut();
		}
	}

	return (
		<div className="header">
			<Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="Amazon Logo"/></Link>
			
			<div className="header__search">
				<input type="text" className="header__searchInput"/>
				<SearchIcon  className="header__searchIcon"/>
			</div>
			
			<div className="header__nav" >

				<div onClick={handleAuth} className="header__option">
					<span className="header__optionLineOne">Hello {!user?'Guest': user.email }</span>
					<span className="header__optionLineTwo"><Link to={!user && "/login"} style={{ textDecoration: 'none', color: 'white' }}>{user?'Sign Out':'Sign In'}</Link></span>
				</div>

				<Link to="/orders" >
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>


				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;