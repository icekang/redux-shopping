import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items, addItem }) => (
    <ul>
        {items.map((item) => (
            <Item
                key={item.itemId}
                {...item}
                onClick={() => {
                    addItem(item.itemId);
                }}
            />
        ))}
    </ul>
);

Item.propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
};

export default ItemList;
