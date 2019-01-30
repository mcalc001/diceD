import React, { Component } from 'react';

import './App.css';


import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import TextBox from './components/TextBox/TextBox';
import ResultBox from './components/TextBox/ResultBox';
import LoginNavigation from './components/Navigation/LoginNavigation';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Profile from './components/profile/Profile';



const originalState = {
        initialstate: true,
        task: '',
        number: '',
        route: 'home',
        isSignedIn: "true",
        isProfileOpen: true,
        rollData:[],
        user: { id: '',
            name: '',
            email: '',
            entries: 0,
            joined: '',
        }
       
    }    





class App extends Component {
	constructor(){
		super()
			this.state = originalState;
      console.log(this.state)
	}




    onPostFetch = () => {
    fetch(`http://localhost:3000/profile/${this.state.user.id}`,{
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    }).then(resp => resp.json())
      .then( user => this.setState({rollData: user}));
  }


 
onProfileUpdate = (data) => {

    fetch(`http://localhost:3000/profile/${this.state.user.id}`,{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        rolldata: this.state.task,
      })
    }).then(resp=> resp.json())
      .then(console.log);
  }





  loadUser = (data) => {
    
    this.setState( {user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined,
          }})
  }


    // the data from the randomly generated box is passed here and set to state. 
    OnRoll = (child, number) => {
        this.setState({initialstate: false})
        const result = child;
        const num = number;
        this.setState({task: result})
        this.setState({number: num })
        
    }

  	
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({route: "signin"})
      this.setState({isSignedIn: "false"})
    } else if ( route === 'home') {
      this.setState({isSignedIn: "true"})
    }
    this.setState({route: route});
  }  

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen
    }))
  }




  onRollChange = (rollRoute) =>{
    if (rollRoute === "rollAgain"){
      this.setState({initialstate: true})
    } else {
      this.setState({initialstate: false})
    }console.log(this.state)
  }


  
  render() {
   const { route, initialstate, isProfileOpen, rollData} = this.state;
    const filteredData = rollData.filter(data=> {
      return data.roll_id;
    })


  	return( 
  		<div className='App'>
      <LoginNavigation 
     toggleModal={this.toggleModal}
      onRollChange={this.onRollChange}
      isSignedIn={this.state.isSignedIn}
      onRouteChange={this.onRouteChange} 
      initialstate={this.state.initialstate}
    />
        {isProfileOpen && 
          <Modal>
            <Profile 
            isProfileOpen={isProfileOpen} 
            toggleModal={this.toggleModal} 
            onRouteChange={this.onRouteChange}
            user={this.state.user} 
            rollData={filteredData}

            />
         </Modal>}
    

     {route === 'home'?

     <div>
      {initialstate ? (
        <div>
          <Header/>
          <TextBox onRoll={this.OnRoll}/> 
        </div>

        ) 
      :(
          <ResultBox 
          onRollChange={this.onRollChange} onProfileUpdate={this.onProfileUpdate}
          result={this.state.task} number={this.state.number} id={this.state.user.id}/>
        )}

      </div>

     :(route === 'signin'
           ?<SignIn  onRouteChange={this.onRouteChange} loadUser={this.loadUser}  onPostFetch={this.onPostFetch}/>
           :<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} onPostFetch={this.onPostFetch} /> 

     )
   }
     </div>
   
    );         
}
}


export default App;
