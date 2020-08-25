import { setSelectedColor, setViewedMonth, setViewedYear, setMode } from '../actions';
import { Header } from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    language: state.language
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(ownProps.id, selectedColor)),
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
    setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
    setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);