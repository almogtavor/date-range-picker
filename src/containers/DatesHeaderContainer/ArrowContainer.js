import { setSelectedColor, setViewedMonth, setViewedYear } from '../../actions';
import Arrow from '../../components/DatesHeaderComponents/Arrow';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    selectedDays: state.selectedDays,
    arrowSide: ownProps.arrowSide,
    
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
})};

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);