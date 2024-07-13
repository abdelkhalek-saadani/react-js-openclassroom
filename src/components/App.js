import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState(() => {
		let cartFromLocalStorage = localStorage.getItem('cart');
		if (cartFromLocalStorage) {
			return JSON.parse(cartFromLocalStorage)
		}
		else return []
	})
	// const [cart, updateCart] = useState([]);
	console.log("from App component ",cart);
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>
			<div className='jh-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
