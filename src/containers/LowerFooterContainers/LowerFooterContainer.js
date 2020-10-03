import { setSelectedColor, setShowColorPicker, setShowCalendar, setSelectedDays, setHoveredDay, setChoosenDates } from '../../actions';
import { LowerFooter } from '../../components/LowerFooterComponents/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.id,
        selectedColor: state.lowerFooter.selectedColor,
        mode: state.calendarModes.mode[ownProps.id],
        selectedDays: state.dayElements.selectedDays,
        boardsNum: state.general.boardsNum,
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
    setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
    setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
    setChoosenDates: (choosenDates) => dispatch(setChoosenDates(choosenDates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);