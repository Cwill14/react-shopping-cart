import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
	
	const { cart, clearCart } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const checkout = () => {
		window.alert("Check Out In Progress!")
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<button className="clearB" onClick={() => clearCart()}>Clear Cart</button>
				<p>Total: ${getCartTotal()}</p>
				<button className="checkoutB" onClick={() => checkout()}>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
