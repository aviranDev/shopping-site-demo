import React from 'react';
import TableBody from './TableBody';
import {Form, Table, Th} from '../../styles/table';
import {Heading} from '../../styles/table';

const TableList = ({productsList, handleEdit, handleDelete}) => {
	return (
		<Form>
			<Heading bottom="50px">Ptoducts</Heading>
			<Table>
				<thead>
					<tr>
						<Th>Title</Th>
						<Th>Price</Th>
						<Th>Options</Th>
					</tr>
				</thead>
				<tbody>
					{productsList &&
						productsList.map((product) => (
							<TableBody
								key={product._id}
								product={product}
								handleEdit={handleEdit}
								handleDelete={handleDelete}
							/>
						))}
				</tbody>
			</Table>
		</Form>
	);
};

export default TableList;
