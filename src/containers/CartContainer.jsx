import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state) => ({
    items: state.carts,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
