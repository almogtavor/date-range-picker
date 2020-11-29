import { setMode, setViewedMonth } from '../../actions';
import { connect } from 'react-redux';
import { MonthSelector } from '../../components/CalendarModesComponents/MonthSelector';
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
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
    setMode: (mode) => ownProps.setMode(mode),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(MonthSelector);