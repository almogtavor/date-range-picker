import { connect } from 'react-redux';
import { MonthDaysElements } from "../components/MonthDaysElements";

const mapStateToProps = (state, ownProps) => {
    return ({
        viewedYear: state.viewedYear[ownProps.id],
        viewedMonth: state.viewedMonth[ownProps.id],
        id: ownProps.id,
        startYear: state.startYear,
        endYear: state.endYear,
        language: state.language,
})};

export default connect(mapStateToProps)(MonthDaysElements);