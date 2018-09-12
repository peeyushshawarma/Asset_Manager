import React, {Component} from 'react';

class ItemApproved extends Component{
  render(){
    //console.log('this.props', this.props);
    const {asset} = this.props.eachApproval;
    const {email}= this.props.user;
    return(
      <div>
        {asset}
        &nbsp;
        <span>
          <button className='btn btn-link btn-xs'>
            surrender
          </button>
        </span>
      </div>
    );
  }
}

export default ItemApproved;