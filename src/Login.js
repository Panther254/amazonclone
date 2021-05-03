import React,{ useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase.js';

function Login() {

	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email,password)
		.then((auth) =>{
			history.push('/');
		})
		.catch((error) =>{
			alert(error.message);
		})

	}

	const signUp = e => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email,password)
		.then((auth) =>{
			if (auth) {
				alert('User Created Successfully.You will be redirected to the Homapage.');
				history.push('/');
			}
		}

		)
		.catch((error) =>{
			alert(error.message);
		})

	}

	return (
		<div className="login">
			<Link to="/">
				<img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="Amazon Logo" className="login__logo"/>
			</Link>

			<div className="login__container">
				<h1>Sign In</h1>

				<form action="">
					<h5>Email</h5>
					<input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type="password" name="password" id="" value={password} onChange={e => setPassword(e.target.value)} />

					<button className="login__signInButton" onClick={signIn} >Sign In</button>
				</form>

				<p>
					By Signing In You Agree to the Terms And Conditions of <strong>AmazonCloneByJacob</strong>.
					Kindly refer to the privacy section, Cookies use and Interest-based Ads Notice
				</p>

				<button className="login__signUpButton" onClick={signUp} >Create Your Amazon Account</button>	

			</div>

		</div>
	)
}

export default Login;