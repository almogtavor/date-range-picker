import { setSelectedDays, setChoosenDatesList, setStoredDates, setViewedMonth, setViewedYear } from '../../actions';
import CalendarHeader from '../../components/CalendarHeaderComponents/CalendarHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        selectedDays: state.dayElements.selectedDays,
        hoveredDay: state.dayElements.hoveredDay,
        boardsNum: state.general.boardsNum,
        storedDates: state.calendarHeader.storedDates,
        choosenDatesList: state.calendarHeader.choosenDatesList,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setChoosenDatesList: (choosenDatesList) => dispatch(setChoosenDatesList(choosenDatesList)),
        setStoredDates: (storedDates) => dispatch(setStoredDates(storedDates)),
        setViewedMonth: (id, viewedMonth) => dispatch(setViewedMonth(id, viewedMonth)),
        setViewedYear: (id, viewedYear) => dispatch(setViewedYear(id, viewedYear)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);