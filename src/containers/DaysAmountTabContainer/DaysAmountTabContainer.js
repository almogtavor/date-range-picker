import { connect } from 'react-redux'
import { DaysAmountTab } from "../../components/DaysAmountTabComponents/DaysAmountTab";
import { setSelectedDays, setShowDaysAmountTab } from '../../actions';

const mapStateToProps = (state) => ({
    selectedColor: state.lowerFooter.selectedColor,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setShowDaysAmountTab: (showDaysAmountTab) => dispatch(setShowDaysAmountTab(showDaysAmountTab)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DaysAmountTab);
