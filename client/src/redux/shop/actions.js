import {actionTypes} from './types';
import {addToCart, displayCartItems, checkout} from '../../services/cart';
import {displayAll, removeProduct} from '../../services/products';

/**
 * Cart
 */
export const setItemsToCart = () => async (dispatch) => {
	const response = await displayCartItems();
	dispatch({type: actionTypes.SET_ITEMS_TO_CART, payload: response.data});
};

export const addToCartAction = (id) => async (dispatch) => {
	const response = await addToCart(id);
	dispatch({type: actionTypes.ADD_TO_CART, payload: response.data});
};

export const checking = () => async (dispatch) => {
	const response = await checkout();
	dispatch({type: actionTypes.CHECKOUT_USER_PAYMENT, playload: response.data});
};

/**
 * Products
 */
export const displayAllProducts = () => async (dispatch) => {
	const response = await displayAll();
	dispatch({type: actionTypes.DISPLAY_PRODUCTS, payload: response.data});
};

export const removeing = (id) => async (dispatch) => {
	const response = await removeProduct(id);
	dispatch({type: actionTypes.REMOVE_PRODUCT, payload: response.data});
};
