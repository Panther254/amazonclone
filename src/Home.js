import React from 'react';
import './Home.css';
import Product from './Product.js'

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src="https://images.pexels.com/photos/5872356/pexels-photo-5872356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="The Poster"/>

				<div className="home__row">
					<Product id="4657r632987" title="This is the T & G speaker manufactured by Sony Company" rating={3} image="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/689871/1.jpg?1901" price={11.96}/>
					<Product id="4657g632987" title="Generic M165 Wireless Headphones Earbuds Sports Hanging Earphones white" rating={3} image="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/189252/1.jpg?0696" price={12.96}/>
				</div>

				<div className="home__row">
					<Product id="465e7632987" title="Lepy HiFi Stereo Digital Audio Amplifier 2.1 Channel" rating={3} image="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/519452/1.jpg?5536" price={5.96}/>
					<Product id="4657632987" title="HP Refurbished Elitebook 820 12 Intel Core i5 4 gigabytes,500 gigabytes DOS - Black" rating={3} image="
					https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/567082/1.jpg?7348" price={300.96}/>
					<Product id="4gsgs7" title="HP Laptop Charger - Blue Pin (19.5V,3.33A)" rating={3} image="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/684992/1.jpg?1028" price={99.99}/>
				</div>

				<div className="home__row">
					<Product id="4657q632987" title="TSony PlayStation 5 Standard Edition - Blu-ray - Disk Edition" rating={3} image="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/494983/1.jpg?2968" price={999.99} />
				</div>
			</div>
		</div>
	)
}

export default Home;