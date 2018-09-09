import React, { Component } from 'react';
import './App.css';
import Compdbulb from './assignments/dbulb/dbulb';
import Compbton from './assignments/on/btnon';
import Compbtoff from './assignments/off/btnoff';
import Compbtbreak from './assignments/break/btnbreak';

class App extends Component {


constructor(prop){

	super(prop)


	this.state = {

		bulbOn : true,
		bulboff : false,
		bulbbreak : true,
	};

	this.onBlub = this.onBlub.bind(this);
	this.onBlubbreak = this.onBlubbreak.bind(this);
}




onBlub(value) {
    console.log('onBlubButton Click ==>?', value.bulbOn);
    this.setState({bulbOn: value.bulbOn,bulboff: value.bulboff});
  }
onBlubbreak(value) {
    console.log('onBlubbreak ==>?', value.bulbbreak);
    this.setState({bulbbreak: value.bulbbreak});
  }



  render() {

  	const {bulbOn , bulboff , bulbbreak} = this.state;
// console.log('state == >', this.state);
// console.log('bulbOn == >', this.state.bulbOn);


    return (

    	<div>
    	 <h2>Image Gallery</h2>
		<div className="row">
		<div className="col-md-4">
		  <div className="thumbnail">

		  		{<Compdbulb txtbulbOn={this.state.bulbOn} txtbulboff={this.state.bulboff} txtbulbbreak={this.state.bulbbreak} />}
		    	
		  </div>
		</div>


		<div className="col-md-2">
		  <div className="thumbnail">
		     {bulbOn && <Compbton    blubonkare={this.onBlub} />}
		     {bulboff && <Compbtoff  bluboffkare={this.onBlub} />}	 	  
		     	  
		  </div>
		</div>




<div className="col-md-2">
		  <div className="thumbnail">
		  {bulbbreak && <Compbtbreak blubbreakkare={this.onBlubbreak} />}	 
		     	 
		  </div>
		</div>


		</div>

		</div>

     
     
     

   
    

    );
  }

}


export default App;
