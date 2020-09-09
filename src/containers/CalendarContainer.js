import { setStartDate, setEndDate } from '../actions';
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

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.startDate) {
        try {
            const year = ownProps.startDate.getFullYear();
            dispatch(setStartDate(ownProps.startDate));
        } catch (err) {
            throw Object.assign(new Error('Parameter "startDate" has incorrect year.'), { code: 403 });
        }
    }
    if (ownProps.endDate) {
        try {
            const year = ownProps.endDate.getFullYear();
            dispatch(setEndDate(ownProps.endDate));
        } catch (err) {
            throw Object.assign(new Error('Parameter "endDate" has incorrect year.'), { code: 403 });
        }
    }
    if (ownProps.startDate && ownProps.endDate) {
        try {
            if (ownProps.endDate < ownProps.startDate) {
                throw Object.assign(new Error('"endDate" is bigger than "startDate"'), { code: 403 });
            }
        } catch (err) {
            throw (err);
        }
    }
    return ({})
};


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);