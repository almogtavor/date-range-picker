import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.id,
        mode: state.mode[ownProps.id], 
    }
)}

export default connect(mapStateToProps)(Calendar);