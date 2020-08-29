import { setSelectedColor, setShowColorPicker } from '../actions';
import { LowerFooter } from '../components/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    selectedColor: state.selectedColor,
    showColorPicker: state.showColorPicker[ownProps.id],
    language: state.language,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);