import { setSelectedDays, setStoredDates, setChoosenDatesList, setViewedMonth, setViewedYear } from '../../actions';
import ChoosenDatesItem from '../../components/CalendarHeaderComponents/ChoosenDatesItem';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        choosenDates: ownProps.choosenDates,
        count: ownProps.count,
        choosenDatesList: state.calendarHeader.choosenDatesList,
        isDatesDisplayHovered: ownProps.isDatesDisplayHovered,
        storedDates: state.calendarHeader.storedDates,
        selectedColor: state.lowerFooter.selectedColor,
        boardsNum: state.general.boardsNum,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setChoosenDatesList: (choosenDatesList) => dispatch(setChoosenDatesList(choosenDatesList)),
        setStoredDates: (storedDates) => dispatch(setStoredDates(storedDates)),
        setViewedMonth: (id, viewedMonth) => dispatch(setViewedMonth(id, viewedMonth)),
        setViewedYear: (id, viewedYear) => dispatch(setViewedYear(id, viewedYear)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosenDatesItem);