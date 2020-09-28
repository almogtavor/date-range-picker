import { setHoveredDay } from '../../actions';
import { connect } from 'react-redux';
import HoverableDayElement from '../../components/DayElementsComponents/HoverableDayElement';

const mapStateToProps = (state, ownProps) => {
    return ({
        date: ownProps.date,
        selectedDays: state.dayElements.selectedDays,
        selectedColor: state.lowerFooter.selectedColor,
        hoveredDay: state.dayElements.hoveredDay,
        dayOfWeek: ownProps.dayOfWeek,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(HoverableDayElement);