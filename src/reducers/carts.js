import actions from '../actions/actionTypes';
// const actions = require('../actions/actionTypes');

const carts = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return [
                ...state,
                {
                    itemId: action.itemId,
                    itemName: action.itemName,
                },
            ];
        case actions.REMOVE_ITEM:
            return state.filter((item) => item.itemId === action.itemId);
        default:
            return state;
    }
};

export default carts;
