import React from 'react';
import CartContainer from '../containers/CartContainer';
import ItemListContainer from '../containers/ItemListContainer';
import BookmarkContainer from '../containers/BookmarkContainer';

const App = () => (
    <div>
        <CartContainer />
        <ItemListContainer />
        <BookmarkContainer />
    </div>
);

export default App;
