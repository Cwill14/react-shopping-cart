import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { ItemContext } from './contexts/ItemContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		if (cart.includes(item)){
			return null;
		}
		setCart([...cart, item]);
	};

	const removeItem = id => {
		setCart(cart.filter(item => item.id !== id))
	}

	const clearCart = () => {
		setCart([]);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }} >
				<CartContext.Provider value={{ cart, clearCart }} >
					<ItemContext.Provider value={{ removeItem }} >
						<Navigation />
						<Route exact path="/" component={Products} />
						<Route path="/cart" component={ShoppingCart} />
					</ItemContext.Provider>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
