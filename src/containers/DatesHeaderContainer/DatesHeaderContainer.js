import { setMode } from '../../actions';
import DatesHeader from '../../components/DatesHeaderComponents/DatesHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    id: ownProps.id,
})};

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(DatesHeader);