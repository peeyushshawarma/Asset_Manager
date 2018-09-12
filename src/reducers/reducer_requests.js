import {SET_REQUESTS} from '../constants';

export default(state=[], action)=>{
  switch(action.type){
    case SET_REQUESTS:
      const {requests} = action;
      return requests
    default:
      return state;
  }
}