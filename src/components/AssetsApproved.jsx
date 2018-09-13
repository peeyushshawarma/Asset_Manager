import React,{Component} from 'react';
import {approvedRef} from '../firebase';
import {approvedAsset} from '../actions';
import {connect} from 'react-redux';
import ItemApproved from './ItemApproved';

class AssetsApproved extends Component{

  componentDidMount(){

    approvedRef.on('value', snap=>{
      let approvedAssets=[];
      snap.forEach(approvedasset=>{
        const {asset, email, requestKey}=approvedasset.val();       //this.props.user.email===eachApproval.email
        const approvedReqKey= approvedasset.key;

        approvedAssets.push({asset,approvedReqKey, email, requestKey});
      })
      //console.log('assets',assets);
      this.props.approvedAsset(approvedAssets);
    })
  }
  render(){
    //console.log('this.props', this.props.user);
    return(
      <div>
      {
          this.props.approvedAssets.map((eachApproval,index)=>{
            if(this.props.user.email===eachApproval.email){
            return(
              <ul key={index}>
              <br/>
                <li><ItemApproved user={this.props.user} eachApproval={eachApproval} key={index}/></li>
              </ul>
               )
            }
          })

      }
      </div>
    );
  }
}

function mapStateToProps(state){
  const {approvedAssets,user} = state;
  return{
      approvedAssets,
      user
    }
}
export default connect(mapStateToProps,{approvedAsset})(AssetsApproved);