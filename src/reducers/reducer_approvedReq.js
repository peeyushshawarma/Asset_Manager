import {SET_APPROVEDREQUEST} from '../constants';

export default(state=[], action)=>{
  switch(action.type){

    case SET_APPROVEDREQUEST:
      const {approvedAssets}= action;
      return approvedAssets
        
      
    default:
      return state;

}
}