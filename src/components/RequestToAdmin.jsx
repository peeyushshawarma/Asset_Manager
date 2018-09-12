import React,{Component} from 'react';
import UserRequestedItem from './UserRequestedItem';
import {assetRef, approvedRef} from '../firebase';
import {connect} from 'react-redux';
import {availableAsset, approvedAsset} from '../actions';

class RequestButton extends Component{

   componentDidMount(){
    
    approvedRef.on('value', snap=>{
      let approvedAssets=[];
      snap.forEach(approvedAssetItem=>{
        const {asset}=approvedAssetItem.val();
        const serverKey= approvedAssetItem.key;

        approvedAssets.push({asset,serverKey});
      })
      
      this.props.approvedAsset(approvedAssets);
    })
  }
 
    componentDidMount(){
    assetRef.on('value', snap=>{
      let assets=[];
      snap.forEach(assetItem=>{
        const {asset}=assetItem.val();
        const serverKey= assetItem.key;

        assets.push({asset,serverKey});
      })
      
      this.props.availableAsset(assets);
    })
  }
  
 

  render(){
    console.log('this.props',this.props);
    return(
      <div>
        
            <h3><u>Assets available to request</u></h3>
            <div style={{marginLeft:'5px'}}>
            {this.props.assets.map((eachasset,index)=>{

                return(
                  <UserRequestedItem key={index} asset={eachasset}/>
                  )
            })
          }
        </div>
      </div>

    );
  }
}

function mapStateToProps(state){
  const {assets, user, approvedAssets} =state;
  return{
    assets,
    user,
    approvedAssets
  }
}

export default connect (mapStateToProps,{availableAsset, approvedAsset})(RequestButton);
 