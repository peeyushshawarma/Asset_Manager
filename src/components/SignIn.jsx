import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';


class SignIn extends Component{
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

  signIn(){
      const {email,password} =this.state;
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error=>{
      this.setState({error})
    })
  }
  render(){
    return(
      <div align='center' className='wrapper root-signin'>
        <div  className='container signin-cont'>
          <h2 style={{color:'yellow'}}>Sign in</h2>
      
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

                style={{marginBottom:'5px', width:'50%'}}
                onChange={event=>this.setState({password:event.target.value})}
              />
              
              <button 
                className='btn btn-primary' 
                style={{marginBottom:'5px'}}
                onClick={()=>this.signIn()}
              > 
                Sign In
              </button>
              
              <div>{this.state.error.message}</div>
            <div >Don't have an account?<Link to='/signup' style={{color:'#00FF00'}}> sign up</Link></div>
            
            </div>

            
          
          
          
        </div>
      </div>
      );
  }
}


export default SignIn; 