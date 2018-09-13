import React,{Component} from 'react';
import UserRequestedItem from './UserRequestedItem';
import {assetRef} from '../firebase';
import {connect} from 'react-redux';
import {availableAsset} from '../actions';

class RequestButton extends Component{

   
 
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
    //console.log('this.props',this.props);
    return(
      <div className='col-md-6 RequestToAdmin-container'>
        
            <h3 style={{color:'#FAEB03'}}><u>Assets available to request</u></h3>
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
  const {assets, user} =state;
  return{
    assets,
    user
    
  }
}

export default connect (mapStateToProps,{availableAsset})(RequestButton);
 