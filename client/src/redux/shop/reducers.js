import {actionTypes} from './types';

const INITIAL_STATE = {
	cart: [],
	products: [],
	product: {},
};

export const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/**
		 * CART
		 */

		//DISPLAY CART ITEMS IN CART
		case actionTypes.SET_ITEMS_TO_CART:
			return {...state, cart: action.payload};

		//Add ITEM TO CART
		case actionTypes.ADD_TO_CART:
			return {...state, cart: action.payload};

		//CHECKOUT USER PAYMENT
		case actionTypes.CHECKOUT_USER_PAYMENT:
			return {
				...state,
				cart: action.payload,
			};

		/**
		 * Products
		 */
		case actionTypes.DISPLAY_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};

		case actionTypes.BUILD_PRODUCT:
			return {
				...state,
				product: action.payload,
			};

		case actionTypes.REMOVE_PRODUCT:
			return {
				...state,
				products: action.payload,
			};

		default:
			return state;
	}
};
