import { connect } from 'react-redux';
import { addItem, removeItem, toggleBookmark } from '../actions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => ({
    items: [
        { itemId: 1, itemName: 'Soap' },
        { itemId: 2, itemName: 'Chair' },
        { itemId: 3, itemName: 'Food' },
        { itemId: 4, itemName: 'Yada yada yada' },
        { itemId: 5, itemName: 'Bla bla bla' },
        { itemId: 6, itemName: 'Lol' },
    ],
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (itemId) => dispatch(addItem(itemId)),
    removeItem: (itemId) => dispatch(removeItem(itemId)),
    toggleBookmark: (itemId) => dispatch(toggleBookmark(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
