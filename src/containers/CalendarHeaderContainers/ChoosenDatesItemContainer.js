import { setSelectedDays, setStoredDates } from '../../actions';
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

})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setChoosenDatesList: (choosenDatesList) => dispatch(setStoredDates(choosenDatesList)),
        setStoredDates: (storedDates) => dispatch(setStoredDates(storedDates)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosenDatesItem);