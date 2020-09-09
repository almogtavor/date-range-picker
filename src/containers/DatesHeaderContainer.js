import { setSelectedColor, setViewedMonth, setViewedYear, setMode } from '../actions';
import { DatesHeader } from '../components/DatesHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    startDate: state.startDate,
    endDate: state.endDate,
    language: state.language,
    selectedDays: state.selectedDays,
    
    nearViewedMonths: {
        "right": {
            "year": state.viewedYear[rightId], 
            "month": state.viewedMonth[rightId]
        },
        "left": {
            "year": state.viewedYear[leftId],
            "month": state.viewedMonth[leftId]
        },
    }
})};

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
        setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(DatesHeader);