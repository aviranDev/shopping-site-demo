import React from 'react';
import Header from '../components/Header/Header';
import AllProducts from '../components/Products/allProducts';

const Home = () => {
	return (
		<>
			<Header title="Home" />
			<AllProducts />
		</>
	);
};

export default Home;
