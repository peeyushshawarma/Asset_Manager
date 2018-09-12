import React, {Component} from 'react';
import {requestRef} from '../firebase';
import {approvedRef} from '../firebase';
import {assetRef} from '../firebase';

class RequestItem extends Component{

  approve = () => {
    const {asset, serverKey, email,requestKey} = this.props.request;

    
   
    assetRef.child(serverKey).once('value') //quantity is decreased from available asset item list
                         .then(snap => {
                          const quantity = snap.val().quantity;
                          if(quantity>0){
                          assetRef.child(serverKey).child('quantity').transaction(() => {return (quantity -1)})
                           approvedRef.push({asset, serverKey, email,requestKey}); //going in approved requests list
                            requestRef.child(requestKey).remove();  //removed from requested item list
                          }
                          else window.alert('The Item is not available to assign!!!');

                         })
  }

  cancel(){
    const {asset, serverKey, email,requestKey} = this.props.request;
    requestRef.child(requestKey).remove();
  }

  render(){
    //console.log('this.props',this.props);
    const {asset, serverKey, email,requestKey} = this.props.request;
    return(
        <div><strong>{asset}</strong> 
        <span>

          <button 
            type="button" class="btn btn-link btn-xs" 
            style={{marginLeft:'10px'}}
            onClick={()=>this.approve()}      //approve button
            >
            <u>Approve</u>
          </button>
          
          <button 
            type="button" class="btn btn-link btn-xs"     //cancel button
            onClick={()=>this.cancel()}
          >
            <u>Cancel</u>
          </button>
        </span>
        <p><font size="-3">requested by</font></p>~~ <em>{email}</em>   
        </div>          // email of requestee
    );
  }
}
export default RequestItem;