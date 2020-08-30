import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.id,
        mode: state.mode[ownProps.id], 
        language: state.language,
        firstDayOfWeekIndex: state.firstDayOfWeekIndex,
    }
)}

export default connect(mapStateToProps)(Calendar);