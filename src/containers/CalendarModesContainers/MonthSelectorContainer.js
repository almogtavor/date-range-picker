import { setMode, setViewedMonth } from '../../actions';
import { connect } from 'react-redux';
import { MonthSelector } from '../../components/CalendarModesComponents/MonthSelector';

const mapStateToProps = (state, ownProps) => {
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        selectedDays: state.dayElements.selectedDays,

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
    })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
    setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelector);