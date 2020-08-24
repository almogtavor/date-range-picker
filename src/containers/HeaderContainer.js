import { setSelectedColor, setViewedMonth, setViewedYear, setMode, setLanguage  } from '../actions';
import { Header } from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear,
    viewedMonth: state.viewedMonth,
    language: state.language,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.language) {
        dispatch(setLanguage(ownProps.language));
    }

    return ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(viewedMonth)),
    setViewedYear: (viewedYear) => dispatch(setViewedYear(viewedYear)),
    setMode: (mode) => dispatch(setMode(mode)),
})
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);