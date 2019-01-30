import React from 'react';
import './Profile.css'

import listsOfPosts from './listsOfPosts';
import Header from './Header';
import Scroll from './Scroll';
import Posts from './Posts';
// import Cardlist from './Cardlist'

// isProfileOpen, toggleModal
class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      id: this.props.user.id,
      name: this.props.user.name,
      rollData: this.props.rollData
      
    }
  
  }

  // this.state.roll.toString()
  render() {
    // console.log(JSON.parse(this.state.rollData));
    // .catch(console.log())
  // const data = this.state.rollData 
 // const data = JSON.stringify(this.state.rollData)
 // var myObj = JSON.parse(this.state.rollData);
 

const data = this.state.rollData;

 // const{ rollData } = this.state;

 
  return (
     
  	<div 
  	className="profile-modal">


  	<article 
    className=" insideCoponent shadow-3 ph4 tc w-100 mw5.5 mw6-ns center pa3 mb4  ">
  	    <Header name={this.state.name} />     
        <Scroll>
        {
       data.map((user, i) => {
        return (  
          <Posts key={i} 
          id={data[i].roll_id}
          data={data[i].rolldata} 
          date={data[i].rolldate}
         
            />

        );
    
      })
     }
     </Scroll>
     <button onClick={this.props.toggleModal}>Return</button>
  </article>

  
    </div> 
  	)
}
}

export default Profile; 