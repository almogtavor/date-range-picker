import { setSelectedDays, setHoveredDay } from '../../actions';
import { connect } from 'react-redux';
import { SelectAllButton } from '../../components/LowerFooterComponents/SelectAllButton';
import { getNearViewedMonths } from '../../selectors';


// function getNearViewedMonths(datesHeaderState, rightId, leftId) {
//     return {
//         "right": {
//             "year": datesHeaderState.viewedYear[rightId], 
//             "month": datesHeaderState.viewedMonth[rightId],
//         },
//         "left": {
//             "year": datesHeaderState.viewedYear[leftId],
//             "month": datesHeaderState.viewedMonth[leftId],
//         },
//     }
// }

const mapStateToProps = (state, ownProps) => {
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    return ({
        selectedDays: state.dayElements.selectedDays,
        mode: state.calendarModes.mode[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        nearViewedMonths: getNearViewedMonths(state, rightId, leftId),
})};

const mapDispatchToProps = (dispatch) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAllButton);