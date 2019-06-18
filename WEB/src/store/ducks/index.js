import { combineReducers } from 'redux';
import purchase from './purchase';
import sign from './sign';

export default combineReducers({ purchase, sign });
