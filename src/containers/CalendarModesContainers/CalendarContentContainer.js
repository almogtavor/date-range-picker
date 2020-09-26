import { CalendarContent } from '../../components/CalendarModesComponents/CalendarContent';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.id,
        mode: state.calendarModes.mode[ownProps.id], 
    }
)}

export default connect(mapStateToProps)(CalendarContent);