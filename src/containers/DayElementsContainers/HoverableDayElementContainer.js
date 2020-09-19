import { setHoveredDay } from '../../actions';
import { connect } from 'react-redux';
import { HoverableDayElement } from '../components/HoverableDayElement';

const mapStateToProps = (state, ownProps) => {
    return ({
        date: ownProps.date,
        selectedDays: state.selectedDays,
        selectedColor: state.selectedColor,
        hoveredDay: state.hoveredDay,
        dayOfWeek: ownProps.dayOfWeek,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(HoverableDayElement);