import { connect } from 'react-redux';
import { MonthDaysElements } from "../../components/DayElementsComponents/MonthDaysElements";

const mapStateToProps = (state, ownProps) => {
    return ({
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        id: ownProps.id,
})};

export default connect(mapStateToProps)(MonthDaysElements);