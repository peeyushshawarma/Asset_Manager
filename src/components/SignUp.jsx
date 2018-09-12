import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';

class SignUp extends Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      error:{
        message:''
      }
    }
  }

  signUp(){
  
    const {email,password} =this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error=>{
      this.setState({error})
    })
  }
  render(){
    return(
      <div align='center' className='wrapper root-signup'>
        <div className='container signup-cont'>
          <h2 style={{color:'yellow'}}>Sign up</h2>
        
            <div className='form-group'>
              <input 
                placeholder='email'
                className='form-control' 
                type='text'
                style={{marginBottom:'5px', width:'50%'}}
                onChange={event=>this.setState({email:event.target.value})}
              />
              <input 
                placeholder='password'
                className='form-control'
                type='password'
                style={{marginBottom:'5px',width:'50%'}}
                onChange={event=>this.setState({password:event.target.value})}
              />
              <button 
                className='btn btn-primary' 
                style={{marginLeft:'5px'}}
                onClick={()=>this.signUp()}
                style={{marginBottom:'5px'}}
              > 
                Sign Up
              </button>
              <div>{this.state.error.message}</div>
            <div>Already have an account?<Link to='/signin'> sign in</Link></div>

            </div>

            
          
          
        </div>
        </div>
      );
  }
}

export default SignUp; 