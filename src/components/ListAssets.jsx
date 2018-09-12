import React,{Component} from 'react';
import AssetsApproved from './AssetsApproved';

class ListAssets extends Component{


  render(){
    return(
      <div className= 'col-md-6 ListAssets-container' >
        <h3 style={{color:'#FAEB03'}}><u>Assets possessed by you</u></h3>
        <AssetsApproved/>
      </div>
    );
  }
}
export default ListAssets;