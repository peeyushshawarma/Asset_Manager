import React, {Component} from 'react';

class ItemApproved extends Component{
  render(){
    //console.log('this.props', this.props);
    const {asset} = this.props.eachApproval;
    const {email}= this.props.user;
    return(
      <div>
        <strong>{asset}</strong>
        &nbsp;
        <span>
          <button className='btn btn-link btn-xs' style={{color:'#27AE60'}}>
            <u>surrender</u>
          </button>
        </span>
      </div>
    );
  }
}

export default ItemApproved;