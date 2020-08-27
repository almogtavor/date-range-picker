import { setSelectedColor, setViewedMonth, setViewedYear, setMode, setLanguage } from '../actions';
import { Header } from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    startYear: state.startYear,
    endYear: state.endYear,
    language: state.language,
    nearViewedMonths: {
        "right": {
            "year": state.viewedYear[ownProps.id + 1], 
            "month": state.viewedMonth[ownProps.id + 1]
        },
        "left": {
            "year": state.viewedYear[ownProps.id - 1],
            "month": state.viewedMonth[ownProps.id - 1]
        },
    }
});

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(setLanguage(ownProps.language));
    return ({
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(ownProps.id, selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
        setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(Header);