import { setSelectedDays, setHoveredDay } from '../../actions';
import { connect } from 'react-redux';
import { SelectAllButton } from '../../components/LowerFooterComponents/SelectAllButton';

const mapStateToProps = (state, ownProps) => {
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        selectedDays: state.dayElements.selectedDays,
        mode: state.calendarModes.mode[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        nearViewedMonths: {
            "right": {
                "year": state.datesHeader.viewedYear[rightId], 
                "month": state.datesHeader.viewedMonth[rightId],
            },
            "left": {
                "year": state.datesHeader.viewedYear[leftId],
                "month": state.datesHeader.viewedMonth[leftId],
            },
        }
})};

const mapDispatchToProps = (dispatch) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAllButton);