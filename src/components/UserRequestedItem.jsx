import React,{Component} from 'react';
import {requestRef} from '../firebase';
import {connect} from 'react-redux';


class UserRequestedItem extends Component{

  constructor(props){
    super(props);
    this.state={
      RequestValue: 'false'
    }
  }

  requestThis(){
    //console.log('balle balle');
    const {email}= this.props.user;
    const {serverKey}= this.props.asset;
    const {asset} = this.props.asset;
    requestRef.push({asset,serverKey, email});
    this.setState({RequestValue:'true'})
  }

  renderButton(){
    const {RequestValue}= this.state;
    if(RequestValue==='false'){
      return(
          <button 
            className='btn btn-primary btn-xs'
            onClick={()=>this.requestThis()}
          >
            Request            
          </button>
        )
    }
    else{
      return(
        <button 
            className='btn btn-warning btn-xs'
            
          >
            Requested          
          </button>

        )
    }

  }

  render(){
    //console.log('this.props', this.props.user.email);
    const {serverKey}= this.props.asset;
    return(
      <div>
      <div>{this.props.asset.asset}
      <span style={{marginLeft:'5px'}}>

        {this.renderButton()}
        
      </span>
      </div>
      <br/>
      </div>
    );
  }
}
        // <button 
        //   className='btn btn-primary btn-xs'
        //   onClick={()=>this.requestThis()}      
        //  //change the color and content of button if clicked
        // >
        //  Request
        // </button>
function mapStateToProps(state){
  const {user}= state;
  return{
    user
  }
}

export default connect(mapStateToProps,null)(UserRequestedItem);