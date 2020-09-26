import { setSelectedColor, setShowColorPicker, setShowCalendar, setSelectedDays, setHoveredDay, setChoosenDates } from '../../actions';
import { LowerFooter } from '../../components/LowerFooterComponents/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        id: ownProps.id,
        selectedColor: state.lowerFooter.selectedColor,
        showColorPicker: state.lowerFooter.showColorPicker[ownProps.id],
        mode: state.calendarModes.mode[ownProps.id],
        selectedDays: state.dayElements.selectedDays,
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        nearViewedMonths: {
            "right": {
                "year": state.datesHeader.viewedYear[rightId], 
                "month": state.datesHeader.viewedMonth[rightId],
            },
            "left": {
                "year": state.datesHeader.viewedYear[leftId],
                "month": state.datesHeader.viewedMonth[leftId],
            },
        }
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