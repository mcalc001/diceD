import React, { Component } from 'react';

import './App.css';

import TextBox from './components/TextBox/TextBox';
import ResultBox from './components/TextBox/ResultBox';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Error from './components/Error/Error';



class App extends Component {
	constructor(){
		super()
			this.state= {
				initialstate: true,
				task: '',
				number: '',
		}
	  
      this.OnRoll = this.OnRoll.bind(this);
      
	}

    // the data from the randomly generated box is passed here and set to state. 
    OnRoll = (child, number) => {
        this.setState({initialstate: false})
        const result = child;
        const num = number;
        this.setState({task: result})
        this.setState({number: num })
    }
  // resonsible in part for decideding what components are shown.
  onRouteChange = (route)=>{
  	if ( route === "roll"){
  		this.setState({initialstate: true})
  	}
  }

  render() {
   
  	return( 
  		<div>
    <Navigation onRouteChange={this.onRouteChange} initialstate={this.state.initialstate}/>
  	{this.state.initialstate === true ?
    
      <div>
        <Header/>
       <TextBox onRoll={this.OnRoll}/> 
      
      </div>
    :( 
    	this.state.initialstate === false 
        ?<ResultBox result={this.state.task} number={this.state.number}/>
        : <Error/> 		
      )
    }
    </div>
    );
  }
}


export default App;
