import { setSelectedDays, setHoveredDay } from '../../actions';
import { connect } from 'react-redux';
import { SelectAllButton } from '../../components/LowerFooterComponents/SelectAllButton';

const mapStateToProps = (state, ownProps) => {
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        selectedDays: state.selectedDays,
        mode: state.mode[ownProps.id],
        viewedMonth: state.viewedMonth[ownProps.id],
        viewedYear: state.viewedYear[ownProps.id],
        nearViewedMonths: {
            "right": {
                "year": state.viewedYear[rightId], 
                "month": state.viewedMonth[rightId],
            },
            "left": {
                "year": state.viewedYear[leftId],
                "month": state.viewedMonth[leftId],
            },
        }
})};

const mapDispatchToProps = (dispatch) => ({
    setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAllButton);