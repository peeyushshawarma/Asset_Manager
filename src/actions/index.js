import {SET_USER} from '../constants';
import {SET_ASSETS} from '../constants';
import {SET_REQUESTS} from '../constants';
import {SET_APPROVEDREQUEST} from '../constants';

export function logUser(email){
  return{
    type: SET_USER,
    email
}
}

export function availableAsset(assets){
  return{
    type: SET_ASSETS,
    assets
  }
}

export function requestedAsset(requests){
  return{
    type: SET_REQUESTS,
    requests
  }
}

export function approvedAsset(approvedAssets){
  return{
    type: SET_APPROVEDREQUEST,
    approvedAssets
    }
}