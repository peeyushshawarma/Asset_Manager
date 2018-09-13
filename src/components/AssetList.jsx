import React, {Component} from 'react';
import {connect} from 'react-redux';
import {assetRef} from '../firebase';
import {availableAsset} from '../actions';
import AvailableAssetItem from './AvailableAssetItem';

class AssetList extends Component{
  componentDidMount(){
    assetRef.on('value', snap=>{
      let assets=[];
      snap.forEach(assetItem=>{
        const {asset, quantity}=assetItem.val();
        const serverKey= assetItem.key;

        assets.push({asset,serverKey, quantity});
      })
      //console.log('assets',assets);
      this.props.availableAsset(assets);
    })
  }

  render(){
    //console.log('this.props', this.props.assets);
    ////console.log('this.state',this.state);
    return(
      <div>
      { 
        this.props.assets.map((everyasset,index)=>{
            return(

              <ul key={index}>
              <br/>
              <li ><AvailableAssetItem key={index} asset={everyasset}/></li>
              </ul>
              )
        })
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  const {assets} =state;
  return{
    assets
  }
}

export default connect (mapStateToProps,{availableAsset})(AssetList);