import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
	
	const { cart, clearCart } = useContext(CartContext);
	// console.log(cart);
	// let localArr = Object.values(localStorage);
	let numArr = Object.values(localStorage).map(each => parseFloat(each));

	const getCartTotal = () => {
		return numArr.reduce((acc, value) => {
			return acc + value
		}, 0).toFixed(2);
		// return cart.reduce((acc, value) => {
		// 	return acc + value.price;
		// }, 0).toFixed(2);
	};
	// console.log(Array.from(localStorage));
	const checkout = () => {
		window.alert("Check Out In Progress!")
	}

	return (
		<div className="shopping-cart">

			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}
			{/* {cart.map(item => (
				<Item key={item.id} {...item} />
			))} */}

			<div className="shopping-cart__checkout">
				<button className="clearB" onClick={() => clearCart()}>Clear Cart</button>
				<p>Total: ${getCartTotal()}</p>
				<button className="checkoutB" onClick={() => checkout()}>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
