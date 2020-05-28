const actions = require('./actionTypes');

export const addItem = (itemId, itemName) => ({
    type: actions.ADD_ITEM,
    itemId,
    itemName,
});

export const removeItem = (itemId) => ({
    type: actions.REMOVE_ITEM,
    itemId,
});

export const addBookmark = (itemId, itemName) => ({
    type: actions.ADD_BOOKMARK,
    itemId,
    itemName,
});
