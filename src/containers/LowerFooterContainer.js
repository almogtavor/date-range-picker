import { setSelectedColor } from '../actions';
import { LowerFooter } from '../components/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    selectedColor: state.selectedColor,
    showColorPicker: ownProps.showColorPicker,
    language: state.language,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => ownProps.setShowColorPicker(showColorPicker),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);