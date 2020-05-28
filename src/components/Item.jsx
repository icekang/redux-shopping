import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemName, addItem, removeItem }) => (
    <div style={{ margin: '10px 10px' }}>
        <span>
            <button onClick={removeItem}>-</button>
            <label>{itemName}</label>
            <button onClick={addItem}>+</button>
        </span>
    </div>
);
Item.propTypes = {
    itemName: PropTypes.string.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default Item;
