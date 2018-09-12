import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AdminPage from './components/AdminPage';
import {logUser} from './actions';
import reducer from './reducers';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {firebaseApp} from './firebase';

const store= createStore(reducer);
 
firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    console.log('user has logged in or up', user.email);
    const {email} =user;
    store.dispatch(logUser(email));
      if(email==='shivam@shivam.com'){
        browserHistory.push('/admin');
      }
      else{
      browserHistory.push('/app');
      }
  }else{
    console.log('user has signed out or still needs to sign in');
    browserHistory.replace('/signin');
  }
})



ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory}>
      <Route path='/app' component={App}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/admin' component={AdminPage}/>

    </Router>
  </Provider>,document.getElementById('root')
);




