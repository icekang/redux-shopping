import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, itemName }) => (
    <div onClick={onClick}>
        <h1>{itemName}</h1>
    </div>
);
Item.propTypes = {
    text: PropTypes.string.isRequired,
    onCLick: PropTypes.func.isRequired,
};

export default Item;
