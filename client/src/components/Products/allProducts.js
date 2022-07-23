import React, {useState, useEffect} from 'react';
import {displayAll} from '../../services/products';
import {MainContainer} from '../../styles/styles';
import {Products} from './ProductStyles';
import Product from './Product';
import Header from '../Header/Header';
const AllProducts = () => {
	const [products, setProducts] = useState(null);
	useEffect(() => {
		const getProducts = async () => {
			const {data} = await displayAll();
			setProducts(data);
		};

		getProducts();
	}, []);

	return (
		<MainContainer>
			<Header title="Products" />
			<Products>
				{products?.map((products) => (
					<Product key={products._id} product={products} />
				))}
			</Products>
		</MainContainer>
	);
};

export default AllProducts;
