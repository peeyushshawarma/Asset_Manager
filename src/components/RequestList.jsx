import React,{Component} from 'react';
import {requestRef} from '../firebase';
import {connect} from 'react-redux';
import {requestedAsset} from '../actions';
import RequestItem from './RequestItem';

class Requestlist extends Component{
  componentDidMount(){
    requestRef.on('value', snap=>{
      let requests=[];

      snap.forEach(requestItem=>{
        const {asset, serverKey, email}=requestItem.val();
        const requestKey= requestItem.key;
        requests.push({asset,serverKey,email,requestKey});

      })
      //console.log('requests', requests);
      this.props.requestedAsset(requests);
    })
  }

  render(){
    //console.log('this.props', this.props);
    return(

      <div className='col-md-6 Requestlist-container'>
        <h3 style={{color:'#FAEB03'}}><u>Requests pending</u></h3>
        <div>
          {
            this.props.requests.map((eachrequest,index)=>{
              return(
                <ul key={index}>
                  <li ><RequestItem key={index} request={eachrequest}/></li>
                </ul>
                  )
          })
        }
        </div>

          
      </div>
    );
  }
}

function mapStateToProps(state){
  const {requests}= state;
  return {

        requests
  }

}

export default connect (mapStateToProps,{requestedAsset})(Requestlist);