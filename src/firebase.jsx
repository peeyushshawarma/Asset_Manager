import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCw94VzAMHAsoaKIQxSnLXDGxZ8L5r_7ZA",
    authDomain: "asset-management-c2bfb.firebaseapp.com",
    databaseURL: "https://asset-management-c2bfb.firebaseio.com",
    projectId: "asset-management-c2bfb",
    storageBucket: "asset-management-c2bfb.appspot.com",
    messagingSenderId: "934465159844"
  };

export const firebaseApp=firebase.initializeApp(config);
export const assetRef = firebase.database().ref('AvailableAssets');
export const requestRef = firebase.database().ref('RequestedAssets');
export const approvedRef= firebase.database().ref('RequestApproved');