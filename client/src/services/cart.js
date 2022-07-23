import service from './http';
import config from '../config/server';
const api = `${config.server.url}/carts`;
const credentials = {
	withCredentials: true,
};
export const addToCart = (id) => {
	return service.get(`${api}/add-to-cart/${id}`, credentials);
};

export const displayCartItems = () => {
	return service.get(`${api}/display-cart`, credentials);
};

export const checkout = () => {
	return service.get(`${api}/checkout`, credentials);
};

export const top5 = () => {
	return service.get(`${api}/display-top-sales`);
};
