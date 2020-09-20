import { connect } from 'react-redux';
import MonthDaysElements from "../../components/DayElementsComponents/MonthDaysElements";

const mapStateToProps = (state, ownProps) => {
    return ({
        viewedYear: state.viewedYear[ownProps.id],
        viewedMonth: state.viewedMonth[ownProps.id],
        id: ownProps.id,
})};

export default connect(mapStateToProps)(MonthDaysElements);