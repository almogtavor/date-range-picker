import { setSelectedColor, setShowColorPicker } from '../../actions';
import { ColorPickerPalette } from '../../components/LowerFooterComponents/ColorPickerPalette';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        showColorPicker: state.lowerFooter.showColorPicker[ownProps.id],
        showPaletteAllowed: ownProps.showPaletteAllowed,
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerPalette);