import { combineReducers } from 'redux';
import purchase from './purchase';
import sign from './sign';
import products from './products';

export default combineReducers({ purchase, sign, products });
