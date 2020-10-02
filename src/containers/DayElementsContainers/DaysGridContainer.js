import { connect } from 'react-redux';
import { DaysGrid } from "../../components/DayElementsComponents/DaysGrid";

const mapStateToProps = (state, ownProps) => {
    return ({
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        id: ownProps.id,
})};

export default connect(mapStateToProps)(DaysGrid);