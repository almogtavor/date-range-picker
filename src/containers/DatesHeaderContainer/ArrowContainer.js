import { setSelectedColor, setViewedMonth, setViewedYear } from '../../actions';
import {Arrow} from '../../components/DatesHeaderComponents/Arrow';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        selectedDays: state.dayElements.selectedDays,
        arrowSide: ownProps.arrowSide,
        
        nearViewedMonths: {
            "right": {
                "year": state.datesHeader.viewedYear[rightId], 
                "month": state.datesHeader.viewedMonth[rightId]
            },
            "left": {
                "year": state.datesHeader.viewedYear[leftId],
                "month": state.datesHeader.viewedMonth[leftId]
            },
        }
    })
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);