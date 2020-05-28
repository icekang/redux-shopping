import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items, addItem, removeItem, toggleBookmark }) => (
    <ul>
        {items.map((item) => (
            <Item
                key={item.itemId}
                {...item}
                addItem={() => {
                    addItem(item.itemId);
                }}
                removeItem={() => {
                    removeItem(item.itemId);
                }}
                toggleBookmark={() => {
                    toggleBookmark(item.itemId);
                }}
            />
        ))}
    </ul>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    toggleBookmark: PropTypes.func.isRequired,
};

export default ItemList;
