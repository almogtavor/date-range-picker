import { setSelectedDays, setStoredDates, setChoosenDatesList } from '../../actions';
import DatesDisplay from '../../components/CalendarHeaderComponents/DatesDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        selectedDays: state.dayElements.selectedDays,
        choosenDates: ownProps.choosenDates,
        choosenDatesList: state.calendarHeader.choosenDatesList,
        selectedDaysStyle: ownProps.selectedDaysStyle,
        storedDates: state.calendarHeader.storedDates,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setChoosenDatesList: (choosenDatesList) => dispatch(setChoosenDatesList(choosenDatesList)),
        setStoredDates: (storedDates) => dispatch(setStoredDates(storedDates)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(DatesDisplay);