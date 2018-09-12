import React,{Component} from 'react';
import AssetsApproved from './AssetsApproved';

class ListAssets extends Component{


  render(){
    return(
      <div>
        <h3><u>Assets possessed by you</u></h3>
        <AssetsApproved/>
      </div>
    );
  }
}
export default ListAssets;