import React from 'react';
import Modal from '../../pages/Modal';
import {
	Container,
	Heading,
	Form,
	AddButton,
	FormInput,
	Label,
} from '../../styles/table';

const Generate = ({
	handleChangeEdit,
	product,
	open,
	onClose,
	handleSubmit,
	handleChange,
	handleError,
	error,
}) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Form onSubmit={handleSubmit}>
				<Container>
					{product ? (
						<Heading color="#ccc">edit Product</Heading>
					) : (
						<Heading color="#ccc">Add Product</Heading>
					)}
					<Label color="#ccc">Title</Label>
					<FormInput
						type="text"
						name="title"
						onChange={product ? handleChangeEdit : handleChange}
						defaultValue={product?.title}
						onFocus={() => {
							handleError(null, 'title');
						}}
					/>
					{error && (
						<span style={{color: 'red', fontSize: '20px'}}>{error.title}</span>
					)}
					<Label color="#ccc">Price</Label>
					<FormInput
						type="text"
						name="price"
						onChange={product ? handleChangeEdit : handleChange}
						defaultValue={product?.price}
						onFocus={() => {
							handleError(null, 'price');
						}}
					/>
					{error && (
						<span style={{color: 'red', fontSize: '20px'}}>{error.price}</span>
					)}
					<Label color="#ccc">Description</Label>
					<FormInput
						type="text"
						name="description"
						onChange={product ? handleChangeEdit : handleChange}
						defaultValue={product?.description}
						onFocus={() => {
							handleError(null, 'description');
						}}
					/>
					{error && (
						<span style={{color: 'red', fontSize: '20px'}}>
							{error.description}
						</span>
					)}

					<Label color="#ccc">Image</Label>
					<FormInput
						type="text"
						name="image"
						onChange={product ? handleChangeEdit : handleChange}
						defaultValue={product?.image}
						onFocus={() => {
							handleError(null, 'image');
						}}
					/>

					<AddButton type="submit" color="#ccc" width="100%">
						+ Add
					</AddButton>
				</Container>
			</Form>
		</Modal>
	);
};

export default Generate;
