import { connect } from 'react-redux'
import { DaysAmountTabButton } from "../../components/DaysAmountTabComponents/DaysAmountTabButton";
import { setSelectedDays, setShowDaysAmountTab } from '../../actions';

const mapStateToProps = (state) => ({
    selectedColor: state.lowerFooter.selectedColor,
    showDaysAmountTab: state.daysAmountTab.showDaysAmountTab,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setShowDaysAmountTab: (showDaysAmountTab) => dispatch(setShowDaysAmountTab(showDaysAmountTab)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DaysAmountTabButton);
