import React, {Component} from 'react';
import {assetRef} from '../firebase';

class AvailableAssetItem extends Component{

  minusasset(serverKey, quantity){
    if(quantity>0){
      quantity= quantity-1;

      assetRef.child(serverKey).child('quantity').transaction(()=>{return quantity});
    }
    else
      window.alert('The item is not present in the inventory');

 }

  addasset(serverKey,quantity){
    quantity=quantity+1;
    assetRef.child(serverKey).child('quantity').transaction(()=>{return quantity});
  }

  Remove(serverKey){
    assetRef.child(serverKey).remove();
  }

  render(){
    console.log('this.props', this.props.asset);
    const {serverKey,asset,quantity}= this.props.asset;
  
    return(
      <div>
        <em>{asset} ({quantity})</em>
        &nbsp;
        <button type="button" class="btn btn-default btn-xs" onClick={()=>this.minusasset(serverKey, quantity)}>
          <span class="glyphicon glyphicon-minus"></span> 
        </button>
        <button type="button" class="btn btn-default btn-xs" onClick={()=>this.addasset(serverKey,quantity)}>
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button 
            type="button" class="btn btn-link btn-xs" 
            style={{marginLeft:'10px'}}
            onClick={()=>this.Remove(serverKey)}      //approve button
            >
            <u>Remove</u>
        </button>
      </div>
    );
  }
}//1C0691

export default AvailableAssetItem;