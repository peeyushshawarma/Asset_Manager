import React,{Component} from 'react';
import {firebaseApp} from '../firebase';
import RequestToAdmin from './RequestToAdmin';
import ListAssets from './ListAssets';
import {logUser} from '../actions';
import {connect} from 'react-redux';

class App extends Component{

  signOut(){
    if(window.confirm('Do you really want to sign-out?')){
      firebaseApp.auth().signOut();
    }

  }

  render(){
    console.log('this.props', this.props);
    const {email} =this.props.user;
    return(
      
        
        <div  style={{marginLeft:'10px'}}>
          <h2><strong>Asset Management System</strong></h2>
          <h4 id='headingWelcome'>Welcome <em>{email}</em></h4>
               <button type="button" class="btn btn-danger btn-sm" onClick={()=>this.signOut()}>
                      <span className="glyphicon glyphicon-off"></span>  
               </button>
          <hr/>
            <div className='container'>
              <div className='row'>
                <div className= 'col-md-6 ListAssets-container' style={{backgroundColor:'red'}}><ListAssets/></div>
                <div className='col-md-6 RequestToAdmin-container' style={{backgroundColor:'blue'}}><RequestToAdmin/></div> 
                
              </div>
            </div>
           
          </div>
        
    );
  }
}

function mapStateToProps(state){
  const {user}= state;
  return {user}
}

export default connect(mapStateToProps,{logUser}) (App);
