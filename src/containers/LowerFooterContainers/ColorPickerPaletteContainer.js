import { setSelectedColor, setShowColorPicker } from '../../actions';
import { ColorPickerPalette } from '../../components/LowerFooterComponents/ColorPickerPalette';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        selectedColor: state.selectedColor,
        showColorPicker: state.showColorPicker[ownProps.id],
        showPaletteById: ownProps.showPaletteById,
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setShowColorPicker: (showColorPicker) => dispatch(setShowColorPicker(ownProps.id, showColorPicker)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerPalette);