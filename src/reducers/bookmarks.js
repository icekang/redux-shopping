// const actions = require('../actions/actionTypes');
import actions from '../actions/actionTypes';
import { findIndex } from 'lodash';

const bookmarks = (state = [], action) => {
    let i;
    switch (action.type) {
        case actions.TOGGLE_BOOKMARK:
            let i = findIndex(state, ['itemId', action.itemId]);
            if (i < 0) {
                return [
                    ...state,
                    {
                        itemId: action.itemId,
                    },
                ];
            } else {
                return [...state.slice(0, i), ...state.slice(i + 1)];
            }
        default:
            return state;
    }
};

export default bookmarks;
