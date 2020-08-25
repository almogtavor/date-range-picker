import { setSelectedColor, setLanguage  } from '../actions';
import { Header } from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    selectedColor: state.selectedColor,
    viewedYear: ownProps.viewedYear,
    viewedMonth: ownProps.viewedMonth,
    language: state.language,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.language) {
        dispatch(setLanguage(ownProps.language));
    }

    return ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setViewedMonth: (viewedMonth) => ownProps.setViewedMonth(viewedMonth),
    setViewedYear: (viewedYear) => ownProps.setViewedYear(viewedYear),
    setMode: (mode) => ownProps.setMode(mode),
})
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);