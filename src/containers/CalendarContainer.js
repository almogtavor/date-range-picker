import { setSelectedColor, setViewedMonth, setViewedYear } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear,
    viewedMonth: state.viewedMonth,
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(viewedMonth)),
    setViewedYear: (viewedYear) => dispatch(setViewedYear(viewedYear)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);