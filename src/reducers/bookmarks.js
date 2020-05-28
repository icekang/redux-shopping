// const actions = require('../actions/actionTypes');
import actions from '../actions/actionTypes';
import { findIndex } from 'lodash';

const bookmarks = (state = [], action) => {
    let i;
    switch (action.type) {
        case actions.ADD_BOOKMARK:
            let i = findIndex(state, ['itemId', action.itemId]);
            if (i < 0) {
                return [
                    ...state,
                    {
                        itemId: action.itemId,
                        itemName: action.itemName,
                    },
                ];
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default bookmarks;
