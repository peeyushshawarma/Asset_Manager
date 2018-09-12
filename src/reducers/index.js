import {combineReducers} from 'redux';
import user from './reducer_user';
import assets from './reducer_assets';
import requests from './reducer_requests';
import approvedAssets from './reducer_approvedReq';

export default combineReducers({
  approvedAssets,
  assets,
  user,
  requests
})