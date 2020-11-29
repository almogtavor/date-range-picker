import { setSelectedColor, setShowColorPicker, setShowCalendar, setSelectedDays, setHoveredDay, setChoosenDates, setButtonDatesText } from '../../actions';
import { LowerFooter } from '../../components/LowerFooterComponents/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.id,
        selectedColor: state.lowerFooter.selectedColor,
        mode: ownProps.mode,
        selectedDays: state.dayElements.selectedDays,
        boardsNum: state.general.boardsNum,
        storedDates: state.calendarHeader.storedDates,
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
    setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
    setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
    setChoosenDates: (choosenDates) => dispatch(setChoosenDates(choosenDates)),
    setButtonDatesText: (buttonDatesText) => dispatch(setButtonDatesText(buttonDatesText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);