import { setSelectedColor, setMuted, setShowColorPicker } from '../actions';
import { LowerFooter } from '../components/LowerFooter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedColor: state.selectedColor,
    muted: state.muted, 
    showColorPicker: state.showColorPicker,
    language: state.language,
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setMuted: (muted) => dispatch(setMuted(muted)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(showColorPicker)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerFooter);