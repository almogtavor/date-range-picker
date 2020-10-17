import { connect } from 'react-redux'
import { DaysAmountTab } from "../../components/DaysAmountTabComponents/DaysAmountTab";
import { setSelectedDays, setShowDaysAmountTab, setViewedYear, setViewedMonth } from '../../actions';

const mapStateToProps = (state) => ({
    selectedColor: state.lowerFooter.selectedColor,
    selectedDays: state.dayElements.selectedDays,
    boardsNum: state.general.boardsNum,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setShowDaysAmountTab: (showDaysAmountTab) => dispatch(setShowDaysAmountTab(showDaysAmountTab)),
        setViewedMonth: (id, viewedMonth) => dispatch(setViewedMonth(id, viewedMonth)),
        setViewedYear: (id, viewedYear) => dispatch(setViewedYear(id, viewedYear)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DaysAmountTab);
