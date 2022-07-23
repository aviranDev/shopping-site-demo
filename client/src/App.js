import React, {useState, useEffect} from 'react';
import {GlobalStyle, Main} from './styles/styles';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import State from './pages/State';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {adminEntery} from './services/admin';
import OrderProvider from './context/OrderProvidor';
import Cart from './pages/Cart';

const URL = process.env;
function App() {
	const [admin, setAdmin] = useState(null);

	useEffect(() => {
		setAdmin(adminEntery());
	}, []);
	return (
		<OrderProvider>
			<GlobalStyle />
			<Navbar />
			<Main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/state" element={<State />} />
					<Route path="/shopping-cart" element={<Cart />} />
				</Routes>
			</Main>
			<Footer />
		</OrderProvider>
	);
}

export default App;
