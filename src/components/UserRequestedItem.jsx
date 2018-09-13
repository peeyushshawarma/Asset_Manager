import React,{Component} from 'react';
import {requestRef, approvedRef} from '../firebase';
import {connect} from 'react-redux';
import {requestedAsset,  approvedAsset} from '../actions';
import _ from 'lodash';


class UserRequestedItem extends Component{


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
    requestRef.on('value', snap=>{
      let RequestArray=[];
        snap.forEach(userrequest=>{
          const mail= userrequest.val().email;
          const {asset}= userrequest.val();
          RequestArray.push({asset, mail});
          })
          this.props.requestedAsset(RequestArray);
        })
  }

  requestThis(){
    
    const {email}= this.props.user;
    const {serverKey}= this.props.asset;
    const {asset} = this.props.asset;
    requestRef.push({asset,serverKey, email});
    
  }

  
    

    //default value of RequestValue==='false' ---> primary button
    
      
    
          renderButton(){
            const {email}= this.props.user;
            const availableAsset= this.props.asset.asset;
            //find the matching matching
            const requests = this.props.requests;
            
            var match= _.find(requests, function(obj){
              if(email===obj.mail && availableAsset===obj.asset){
                return true
              }

            })
            
          if(match){
    
           return(
                      <button 
                          className='btn btn-warning btn-xs'
                          
                        >
                          Requested          
                        </button>
                    )
   
               }
          else{
                      
                      return(
                              <button 
                                className='btn btn-primary btn-xs'
                                onClick={()=>this.requestThis()}
                              >
                                Request            
                              </button>
                            )
                }
    
          }
    
  ItemDisplay(){
    const {email}= this.props.user; 
    const {asset}= this.props.asset;
    const {approvedAssets}= this.props;

    var Display=_.find(approvedAssets, function(obj){
        const mail= obj.email;
        const availableAsset = obj.asset;
        if(email===mail){
          if(asset===availableAsset){
            return true
          }
          
            
        }
    })

    if(Display){
      return null
    }
    else{
      return(
              <div>

              <div>{asset}
                <span style={{marginLeft:'5px'}}>

                  {this.renderButton()}
                  
                </span>
              </div>
              <br/>
              </div>
              )
          
    }

  }


  render(){
    //console.log('this.props', this.props);

    
    return(
      <div>
        {this.ItemDisplay()}
      </div>
    );
  }
}
       
function mapStateToProps(state){
  const {user,requests,approvedAssets}= state;
  return{
    user,
    requests,
    approvedAssets
  }
}

export default connect(mapStateToProps,{requestedAsset, approvedAsset})(UserRequestedItem);