import React from 'react';
import Header from '../components/Header/Header';
import {MainContainer} from '../styles/styles';
import {useSelector} from 'react-redux';
import Item from '../components/Cart/Item';

const Cart = () => {
	const list = useSelector((state) => state.shop.cart);

	const {products, totalPrice, totalQty} = list;
	console.log(products);
};

export default Cart;
