import actions from '../actions/actionTypes';
import _ from 'lodash';
import { produce } from 'immer';
// const actions = require('../actions/actionTypes');

const carts = (state = [], action) => {
    let i;
    switch (action.type) {
        case actions.ADD_ITEM:
            i = _.findIndex(state, ['itemId', action.itemId]);
            if (i < 0) {
                return [
                    ...state,
                    {
                        itemId: action.itemId,
                        itemName: action.itemName,
                        quantity: 1,
                    },
                ];
            } else {
                return [
                    ...state.slice(0, i),
                    produce(state[i], (draftItem) => {
                        draftItem.quantity = draftItem.quantity + 1;
                    }),
                    ...state.slice(i + 1),
                ];
            }
        case actions.REMOVE_ITEM:
            i = _.findIndex(state, ['itemId', action.itemId]);
            if (i < 0) {
                return state;
            } else {
                return [
                    ...state.slice(0, i),
                    produce(state[i], (draftItem) => {
                        draftItem.quantity = Math.max(0, draftItem.quantity - 1);
                    }),
                    ...state.slice(i + 1),
                ];
            }
        default:
            return state;
    }
};

export default carts;
