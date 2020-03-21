import React, { JSXElementConstructor } from "react";
import { Dispatch } from "redux";
import { IMobState, IMobAction, IStore } from "../redux/reduxModels";
import { buyMob } from "../redux";
import {connect} from "react-redux";
interface IProps{
// numberOfMob:number;
 mobAction():IMobAction
 numberOfMob:IMobState
}
const MobContainer = (props:any ) :any=> {
 console.log(props)
  return (
    <div>
      <h1>number of mobile{props.mobReducer.numberOfMob}</h1>
      <button onClick={props.mobAction}>BUY </button>
    </div>
  );
};
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      mobAction : () => dispatch(buyMob())
    };
  };
  const mapStateToProps = (state: IStore) => {
   
    return {
      mobReducer: state.mobReducer
    };
  };
 

export default connect(mapStateToProps,mapDispatchToProps)( MobContainer);
