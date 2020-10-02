import { connect } from 'react-redux'
import { DaysAmountTab } from "../../components/DaysAmountTabComponents/DaysAmountTab";
import { setSelectedDays, setShowDaysAmountTab, setViewedYear, setViewedMonth } from '../../actions';

const mapStateToProps = (state) => ({
    selectedColor: state.lowerFooter.selectedColor,
    selectedDays: state.dayElements.selectedDays,
    allViewedMonth: state.datesHeader.viewedMonth,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setShowDaysAmountTab: (showDaysAmountTab) => dispatch(setShowDaysAmountTab(showDaysAmountTab)),
        setViewedMonth: (id, viewedMonth) =>setViewedYear(id, viewedMonth),
        setViewedYear: (id, viewedYear) => setViewedYear(id, viewedYear),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DaysAmountTab);
