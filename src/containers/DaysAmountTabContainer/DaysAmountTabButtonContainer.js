import { connect } from 'react-redux'
import { DaysAmountTabButton } from "../../components/DaysAmountTabComponents/DaysAmountTabButton";
import { setSelectedDays } from '../../actions';

const mapStateToProps = (state) => ({
    selectedColor: state.lowerFooter.selectedColor,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DaysAmountTabButton);
