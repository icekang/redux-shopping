import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemName, addItem, removeItem, toggleBookmark }) => (
    <div style={{ margin: '10px 10px' }}>
        <span>
            <button onClick={toggleBookmark}>*</button>
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
    toggleBookmark: PropTypes.func.isRequired,
};

export default Item;
