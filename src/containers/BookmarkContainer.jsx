import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';

const mapStateToProps = (state) => ({
    bookmarks: state.bookmarks,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
