import React,{Component} from 'react';
import {assetRef} from '../firebase';
import AssetList from './AssetList';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class AddAssets extends Component{
  constructor(props){
    super(props);
    this.state={
      asset:'',
      quantity:'',
      assettype:''
    }
  }

  addAsset(){
    const {asset,quantity,assettype}= this.state;
    assetRef.push({asset, quantity, assettype});
  }


  render(){
    return(
      <div className='form-inline'>
        <h3 style={{color:'#FAEB03'}}><u>Assets available to assign</u></h3>
        <DropdownButton title='AssetType' id= 'MenuItem'>
            
                        <MenuItem eventKey={1} onSelect={event=>this.setState({assettype:'Hardware'})}> Hardware</MenuItem> 
                        <MenuItem eventKey={2} onSelect={event=>this.setState({assettype:'Software'})}> Software</MenuItem>  
                        
        </DropdownButton>
        


          <input 
            className='form-control' 
            placeholder='New Asset'
            type='text'
            onChange={event=>this.setState({asset:event.target.value})}
          />
          &nbsp;
          <input 
            className='form-control' 
            placeholder='Quantity'
            type='number'
            onChange={event=>this.setState({quantity:event.target.value})}
          />
          
          <button 
            className='btn btn-primary'
            onClick={()=>this.addAsset()}
          >
            Add
          </button>

          <AssetList/>
      
        </div>

    );
  }
}

export default AddAssets;