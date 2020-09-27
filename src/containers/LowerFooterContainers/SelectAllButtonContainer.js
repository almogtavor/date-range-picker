import { setSelectedDays, setHoveredDay } from '../../actions';
import { connect } from 'react-redux';
import { SelectAllButton } from '../../components/LowerFooterComponents/SelectAllButton';
import { makeGetNearViewedMonths } from '../../selectors';


const makeMapStateToProps = () => {
    const getNearViewedMonths = makeGetNearViewedMonths()
    const mapStateToProps = (state, ownProps) => {
        return ({
            selectedDays: state.dayElements.selectedDays,
            mode: state.calendarModes.mode[ownProps.id],
            viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
            viewedYear: state.datesHeader.viewedYear[ownProps.id],
            nearViewedMonths: getNearViewedMonths(state, ownProps.language, ownProps.id)
        })
    }
    return mapStateToProps
}

const mapDispatchToProps = (dispatch) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(SelectAllButton);