import React, {Component} from 'react';
import {assetRef} from '../firebase';

class AvailableAssetItem extends Component{

  //to manually decrease the number of items
  minusasset(serverKey, quantity){       
    if(quantity>0){
      quantity= quantity-1;

      assetRef.child(serverKey).child('quantity').transaction(()=>{return quantity});
    }
    else
      window.alert('The item is not present in the inventory');

 }

 //to manually increase the number of items
  addasset(serverKey,quantity){
    quantity=quantity+1;
    assetRef.child(serverKey).child('quantity').transaction(()=>{return quantity});
  }


  // to remove an item from the list
  Remove(serverKey){
    if(window.confirm('Do You want to remove this item ?'))
    assetRef.child(serverKey).remove();
  }



  render(){
    //console.log('this.props', this.props.asset);
    const {serverKey,asset,quantity}= this.props.asset;
  
    return(
      <div>
        <em>{asset} ({quantity})</em>
        &nbsp;
        <button type="button" className="btn btn-default btn-xs" onClick={()=>this.minusasset(serverKey, quantity)}>
          <span className="glyphicon glyphicon-minus"></span> 
        </button>
        <button type="button" className="btn btn-default btn-xs" onClick={()=>this.addasset(serverKey,quantity)}>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <button 
            type="button" className="btn btn-link btn-xs" 
            style={{marginLeft:'10px'}}
            onClick={()=>this.Remove(serverKey)}      
            >
            <u>Remove</u>
        </button>
      </div>
    );
  }
}//1C0691

export default AvailableAssetItem;