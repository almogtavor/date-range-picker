import { setMode, setViewedMonth } from '../actions';
import { connect } from 'react-redux';
import { MonthSelector } from '../components/MonthSelector';

const mapStateToProps = (state, ownProps) => {
    const leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
    selectedColor: state.selectedColor,
    showColorPicker: state.showColorPicker[ownProps.id],
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    startDate: state.startDate,
    endDate: state.endDate,
    mode: state.mode[ownProps.id], 
    language: state.language,
    selectedDays: state.selectedDays,

    nearViewedMonths: {
        "right": {
            "year": state.viewedYear[rightId], 
            "month": state.viewedMonth[rightId],
        },
        "left": {
            "year": state.viewedYear[leftId],
            "month": state.viewedMonth[leftId],
        },
    }
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
    setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelector);