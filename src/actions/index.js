const actions = require('./actionTypes');

export const addItem = (itemId) => ({
    type: actions.ADD_ITEM,
    itemId,
});

export const removeItem = (itemId) => ({
    type: actions.REMOVE_ITEM,
    itemId,
});

export const toggleBookmark = (itemId) => ({
    type: actions.TOGGLE_BOOKMARK,
    itemId,
});
