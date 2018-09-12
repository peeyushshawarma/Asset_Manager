import {SET_ASSETS} from '../constants';

export default(state=[], action)=>{
  switch(action.type){
    case SET_ASSETS:
      const {assets}= action;
      return assets
    default:
      return state;
  }
}