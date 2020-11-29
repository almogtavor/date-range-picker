import { CalendarContent } from '../../components/CalendarModesComponents/CalendarContent';
import { connect } from 'react-redux';
import { getUpdatedObject } from '../../utils/actionsUtils';

// export const setModeObject = (mode) => ({
//     type: 'SET_MODE',
//     mode
//   })
  
//   export function setMode(id, mode) {
//     return (dispatch, getState) => {
//         const stateMode = getState().calendarModes.mode;
//         const stateObj = getUpdatedObject(getState, id, mode, stateMode);
//         dispatch(setModeObject(stateObj));
//     };
//   }


export const setMode = (mode) =>{ 
    console.log("jaifejaifjeaf");
    return  ({
    type: 'SET_MODE',
    mode
  })};
  

const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.id,
        mode: ownProps.mode[ownProps.id],
    }
)}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
    setMode: (mode) => {    console.log("ownProps.dispatchMode");
        ownProps.dispatchMode(setMode(ownProps.id, mode))},
})};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContent);