import React, {Component} from 'react';
import AddAssets from './AddAssets';

class AssetsAvailable extends Component{

  render(){
    return(
      <div className="col-md-6 assetsavailable-container"  >
        
        <AddAssets/>
      </div>
    );
  }
}
export default AssetsAvailable;