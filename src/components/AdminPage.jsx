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
      <div className='wrapper AdminPage-wrapper'>
              <h2><strong>Asset Management System</strong></h2>
                <h4 id='headingWelcome'>Welcome <em>{email}</em></h4>
                 <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.signOut()}>
                        <span className="glyphicon glyphicon-off"></span>  
                 </button>
                  <hr/>
        <div className='container AdminPage-container'>
          <div className='row'>
            <div><RequestList/></div>
            <div><AssetsAvailable/></div>
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