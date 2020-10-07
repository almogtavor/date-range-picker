import { setSelectedDays, setChoosenDatesList } from '../../actions';
import CalendarHeader from '../../components/CalendarHeaderComponents/CalendarHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        selectedDays: state.dayElements.selectedDays,
        hoveredDay: state.dayElements.hoveredDay,
        boardsNum: state.general.boardsNum,
        choosenDatesList: state.calendarHeader.choosenDatesList,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setChoosenDatesList: (choosenDatesList) => dispatch(setChoosenDatesList(choosenDatesList)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);