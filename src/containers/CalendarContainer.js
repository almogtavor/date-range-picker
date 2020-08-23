import { setSelectedColor, setViewedMonth, setViewedYear, setDisplaySelector } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear,
    viewedMonth: state.viewedMonth,
    displaySelector: state.displaySelector, 
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(viewedMonth)),
    setViewedYear: (viewedYear) => dispatch(setViewedYear(viewedYear)),
    setDisplaySelector: (displayMonthSelector) => dispatch(setDisplaySelector(displayMonthSelector)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);