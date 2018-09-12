import React,{Component} from 'react';
import {firebaseApp} from '../firebase';
import RequestList from './RequestList';
import AssetsAvailable from './AssetsAvailable';
import {logUser} from '../actions';
import {connect} from 'react-redux';


class AdminPage extends Component{

  signOut(){
    if(window.confirm('Do you really want to sign-out?')){
      firebaseApp.auth().signOut();
    }
  }
  render(){
    const {email}= this.props.user;
    return(
      <div>
        <h2><strong>Asset Management System</strong></h2>
        <h4 id='headingWelcome'>Welcome <em>{email}</em></h4>
                 <button type="button" class="btn btn-danger btn-sm" onClick={()=>this.signOut()}>
                        <span className="glyphicon glyphicon-off"></span>  
                 </button>
      <hr/>
      <div className='container'>
        <div className='row'>
          <RequestList/><AssetsAvailable/>
        </div>
      </div>
      
      </div>
    );
  }
}

function mapStateToProps(state){
  const {user} = state;
  return {user}
}

export default connect(mapStateToProps,{logUser})(AdminPage);