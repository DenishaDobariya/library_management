import { combineReducers } from 'redux';
import BooksReducer from './bookReducer';

const rootReducer = combineReducers({ bookReducer: BooksReducer });

export default rootReducer;
