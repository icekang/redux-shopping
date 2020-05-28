import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => ({
    items: [
        { itemId: 1, itemName: 'Soap' },
        { itemId: 2, itemName: 'Chair' },
    ],
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (itemId) => dispatch(addItem(itemId)),
    removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
