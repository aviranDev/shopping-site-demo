import httpService from './http';
import config from '../config/server';

export const buildProduct = (product) => {
	return httpService.post(`${config.server.url}/products/create`, product);
};

export const displayAll = () => {
	return httpService.get(`${config.server.url}/products/display-all`);
};

export const displayProductById = (id) => {
	return httpService.get(`${config.server.url}/products/display-product/${id}`);
};

export const updateProduct = (productId, product) => {
	return httpService.put(
		`${config.server.url}/products/update/${productId}`,
		product
	);
};

export const removeProduct = (productId) => {
	return httpService.delete(
		`${config.server.url}/products/delete-product/${productId}`
	);
};
