import React, {useEffect, useState} from 'react';
import Modal from './Modal';
import {buildProduct} from '../services/products';
import {displayAllProducts} from '../redux/shop/actions';
import {useSelector, useDispatch} from 'react-redux';
import Generate from '../components/Forms/Generate';
import {validateInput} from '../lib/validation';
import TableList from '../components/Table/TableList';
import {Container, Heading, AddButton, ButtonModal} from '../styles/table';
import {displayProductById, updateProduct} from '../services/products';
import {removeProduct} from '../services/products';
import useForm from '../hooks/useForm';
import useEditor from '../hooks/useEditor';
import useError from '../hooks/useError';

const productCredentials = {
	title: '',
	price: '',
	description: '',
	image: '',
};

const Admin = () => {
	const productsList = useSelector((state) => state.shop.products);
	const {state, setState, handleChange} = useForm(productCredentials);
	const {edit, setEdit, handleChangeEdit} = useEditor(productCredentials);
	const {error, setError, handleError} = useError(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenSeccsess, setIsOpenSeccsess] = useState(false);
	const [product, setProduct] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isOpen) {
			setState(productCredentials);
			setError(false);
		}
		if (product) {
			setEdit(product);
		}
		dispatch(displayAllProducts());
	}, [isOpen, dispatch, setError, setState, product]);

	const handleSubmit = async (e) => {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		if (product) {
			const errors = validateInput(edit, handleError);
			if (errors) {
				return;
			}
		} else {
			const errors = validateInput(state, handleError);
			if (errors) {
				return;
			}
		}
		try {
			if (product) {
				await updateProduct(product._id, edit);
				dispatch(displayAllProducts());
				setTimeout(() => {
					setIsOpen(false);
					setIsOpenSeccsess(true);
				}, 1500);
			} else {
				await buildProduct(state);
				dispatch(displayAllProducts());
				setTimeout(() => {
					setIsOpen(false);
					setIsOpenSeccsess(true);
				}, 1500);
			}
		} catch ({response}) {
			if (response && response.status >= 400 && response.status <= 500) {
				setError({title: response.data});
			}
		}
	};

	const addProductHandler = () => {
		setIsOpen(true);
		setProduct(null);
	};

	const handleEdit = async (id) => {
		const response = await displayProductById(id);
		setProduct(response.data);
		setIsOpen(true);
	};

	const handleDelete = async (id) => {
		await removeProduct(id);
		dispatch(displayAllProducts());
	};

	return (
		<Container>
			<Heading bottom="-50px" align="left">
				Admin
			</Heading>
			<ButtonModal>
				<AddButton onClick={addProductHandler}>Add</AddButton>
			</ButtonModal>

			<Generate
				handleChangeEdit={handleChangeEdit}
				product={product}
				open={isOpen}
				onClose={() => setIsOpen(false)}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				handleError={handleError}
				error={error}
			/>

			<Modal open={isOpenSeccsess} onClose={() => setIsOpenSeccsess(false)}>
				<Heading color="#ccc" bottom="100px" align="left">
					{product ? 'product updated' : 'A new product launch'}
				</Heading>
			</Modal>

			<TableList
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				productsList={productsList}
				productCredentials={productCredentials}
			/>
		</Container>
	);
};

export default Admin;
