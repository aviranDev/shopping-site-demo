import React from 'react';
import {ProductCard, AddButton} from './ProductStyles';
import {addToCart} from '../../services/cart';
import {addToCartAction} from '../../redux/shop/actions';
import {useSelector, useDispatch} from 'react-redux';

const Product = ({product}) => {
	const dispatch = useDispatch();
	const addProductToCart = (id) => {
		dispatch(addToCartAction(id));
	};

	return (
		<ProductCard>
			<img src={product.image}></img>
			<h2>{product.title}</h2>
			<h2>Price: {product.price}$</h2>
			<h2>Description: {product.description}</h2>
			<AddButton onClick={() => addProductToCart(product._id)}>Buy</AddButton>
		</ProductCard>
	);
};

export default Product;
