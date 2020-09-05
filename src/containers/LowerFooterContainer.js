import { setSelectedColor, setShowColorPicker, setShowCalendar, setSelectedDays } from '../actions';
import { LowerFooter } from '../components/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.id,
    selectedColor: state.selectedColor,
    showColorPicker: state.showColorPicker[ownProps.id],
    language: state.language,
    colorsPalette: state.colorsPalette,
    mode: state.mode[ownProps.id],
    selectedDays: state.selectedDays,
    viewedMonth: state.viewedMonth[ownProps.id],
    viewedYear: state.viewedYear[ownProps.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
    setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);