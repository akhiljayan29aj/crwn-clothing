import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
