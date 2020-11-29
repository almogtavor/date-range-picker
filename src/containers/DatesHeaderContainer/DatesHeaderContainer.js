import { DatesHeader } from '../../components/DatesHeaderComponents/DatesHeader';
import { connect } from 'react-redux';


export function getUpdatedObject(id, parameter, parameterState) {
    console.log("fejaifeja");
    const boardsNum = 2;
    const componentIDs = [...Array(boardsNum).keys()];
    let stateObj = {};
    for (let i of componentIDs) {
      if (id === i) {
        stateObj[i] = parameter;
      }
      else {
        stateObj[i] = parameterState[i];
      }
    }
    return stateObj;
  }
  
  // export const setMode = (mode) =>{ 
  //   console.log("jaifejaifjeaf");
  //   return  ({
  //   type: 'SET_MODE',
  //   mode
  // })};
  export const setMode = (mode) => {
    console.log(mode);
    return ({
    type: 'SET_MODE',
    mode
  })}

const mapStateToProps = (state, ownProps) => {
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        viewedYear: state.datesHeader.viewedYear[ownProps.id],
        viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
        id: ownProps.id,
    })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    setMode: (mode) => {console.log(ownProps, "almog"); 
        ownProps.dispatchMode(setMode(getUpdatedObject(ownProps.id, mode, ownProps.modeState)))},
});


export default connect(mapStateToProps, mapDispatchToProps)(DatesHeader);