import { setSelectedColor, setShowColorPicker, setShowCalendar } from '../actions';
import { LowerFooter } from '../components/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.id,
    selectedColor: state.selectedColor,
    showColorPicker: state.showColorPicker[ownProps.id],
    language: state.language,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
    setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);