import {combineReducers} from 'redux';
import {userReducer} from './user/reducers';
import {shopReducer} from './shop/reducers';

const rootReducer = combineReducers({
	shop: shopReducer,
	user: userReducer,
});

export default rootReducer;
