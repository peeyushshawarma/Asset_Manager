import React, {Component} from 'react';
import {approvedRef} from '../firebase';

class ItemApproved extends Component{

  removeasset(approvedReqKey){
    if(window.confirm('Are you sure?'))
    approvedRef.child(approvedReqKey).remove();
  }
  render(){
    console.log('this.props', this.props);
    const {asset,approvedReqKey} = this.props.eachApproval;
    const {email}= this.props.user;
    return(
      <div>
        <strong>{asset}</strong>
        &nbsp;
        <span>
          <button className='btn btn-link btn-xs' style={{color:'#27AE60'}} onClick={()=>this.removeasset(approvedReqKey)}>
            <u>surrender</u>
          </button>
        </span>
      </div>
    );
  }
}

export default ItemApproved;