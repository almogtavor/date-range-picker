import { setSelectedColor } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedColor: state.selectedColor,
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);