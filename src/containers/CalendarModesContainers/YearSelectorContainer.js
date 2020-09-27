import { setMode, setViewedYear } from '../../actions';
import { connect } from 'react-redux';
import { YearSelector } from '../../components/CalendarModesComponents/YearSelector';
import { makeGetNearViewedMonths } from '../../selectors';


const makeMapStateToProps = () => {
    const getNearViewedMonths = makeGetNearViewedMonths();
    const mapStateToProps = (state, ownProps) => {
        return ({
            selectedColor: state.lowerFooter.selectedColor,
            viewedYear: state.datesHeader.viewedYear[ownProps.id],
            viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
            selectedDays: state.dayElements.selectedDays,
            nearViewedMonths: getNearViewedMonths(state, ownProps.language, ownProps.id)
        })
    }
    return mapStateToProps
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
    setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(YearSelector);