import React from 'react';
import {Td, EditButton, DeleteButton} from '../../styles/table';

const TableBody = ({product, handleDelete, handleEdit}) => {
	return (
		<tr>
			<Td>{product.title}</Td>
			<Td>{product.price} $</Td>
			<Td>
				<EditButton type="button" onClick={() => handleEdit(product._id)}>
					Edit
				</EditButton>
				<DeleteButton type="button" onClick={() => handleDelete(product._id)}>
					Delete
				</DeleteButton>
			</Td>
		</tr>
	);
};

export default TableBody;
