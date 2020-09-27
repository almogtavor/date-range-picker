import { setSelectedColor, setViewedMonth, setViewedYear } from '../../actions';
import {Arrow} from '../../components/DatesHeaderComponents/Arrow';
import { connect } from 'react-redux';
import { makeGetNearViewedMonths } from '../../selectors';

const makeMapStateToProps = () => {
    const getNearViewedMonths = makeGetNearViewedMonths(); 
    const mapStateToProps = (state, ownProps) => {
        return ({
            selectedColor: state.lowerFooter.selectedColor,
            viewedYear: state.datesHeader.viewedYear[ownProps.id],
            viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
            selectedDays: state.dayElements.selectedDays,
            arrowSide: ownProps.arrowSide,
            nearViewedMonths: getNearViewedMonths(state, ownProps.language, ownProps.id)
        })
    }
    return mapStateToProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
})};

export default connect(makeMapStateToProps, mapDispatchToProps)(Arrow);