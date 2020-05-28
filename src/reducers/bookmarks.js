// const actions = require('../actions/actionTypes');
import actions from '../actions/actionTypes';

const bookmarks = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_BOOKMARK:
            return [
                ...state,
                {
                    itemId: action.itemId,
                    itemName: action.itemName,
                },
            ];
        default:
            return state;
    }
};

export default bookmarks;
