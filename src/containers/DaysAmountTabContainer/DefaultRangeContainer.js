import { connect } from 'react-redux'
import { DefaultRange } from "../../components/DaysAmountTabComponents/DefaultRange";
import { setSelectedDays, setViewedYear, setViewedMonth } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    range: ownProps.range,
    index: ownProps.index,
    boardsNum: state.general.boardsNum,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setViewedMonth: (id, viewedMonth) => dispatch(setViewedMonth(id, viewedMonth)),
        setViewedYear: (id, viewedYear) => dispatch(setViewedYear(id, viewedYear)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultRange);
