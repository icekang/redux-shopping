import { combineReducers } from 'redux';
import carts from './carts';
import bookmarks from './bookmarks';

export default combineReducers({
    carts,
    bookmarks,
});
