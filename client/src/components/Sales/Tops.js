import React from 'react';
import './saleStyle.css';

export const Tops5 = ({product}) => (
	<tr key={product._id}>
		<td> {product.title}</td>
		<td>{product.sales} items</td>
	</tr>
);

export const TopsUnique = ({item}) => (
	<tr>
		<td> {item}</td>
	</tr>
);

export const SalsList = ({listItems}) => (
	<tr>
		<td>{listItems.fullDate}</td>
		<td>{listItems.total} $</td>
	</tr>
);
