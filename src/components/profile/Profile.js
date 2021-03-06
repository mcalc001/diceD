import React from 'react';
import './Profile.css'

// import listsOfPosts from './listsOfPosts';
import Header from './Header';
import Scroll from './Scroll';
import Posts from './Posts';
// import List from './listsOfPosts'
// import Cardlist from './Cardlist'

// isProfileOpen, toggleModal


// const b = (data) => {
// if (data.roll_id){
//   return true;
// } else if (data.roll_id === null) { 
//   return false
// }
// }



class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      id: this.props.user.id,
      name: this.props.user.name,
      rollData: []   
    }
  }
 
  componentDidMount(){ 
   
    fetch(`https://fathomless-shelf-13230.herokuapp.com/profile/${this.state.id}`,{
      method: 'get',
      headers: {'Content-Type': 'application/json',
          'Authorization': window.sessionStorage.getItem('token') 
           },
    }).then(resp => resp.json())
      .then( user =>  {
        if (user) {
         this.setState({rollData: user})
      }
      })
    }


  
render() {
  const dat = this.state.rollData;
  const data = dat.reverse();
  
   return ( 

      	<div className="profile-modal  ">
      	 <article className=" bg-white shadow-3 w-100 tc pa2 w6 mw6 mw6-ns center pt3 pb3 mt5 ">
      	   <Header name={this.state.name} />  

            <Scroll>         
       {

        data.map((user, i) => {
        if (data[i].rolldata){
        return (  
          <Posts key={i} 
          id={data[i].roll_id}
          data={data[i].rolldata} 
          date={data[i].rolldate}
                  /> 
            )} else {
            return(
                <Posts
                key={i} 
          data={"No posts yet, you had better get rolling!"} 
          
                  /> 
              )
          }}
        )  
      }
             </Scroll>    
             <div> 
           <button className=" mt2 pt4 3 shadow-5  b ph3 pv2 br2 putton input-reset ba grow pointer f5 dib mr2 " onClick={this.props.toggleModal}>Return</button>
             </div> 
        </article>
      </div> 
  	)
  }
}



export default Profile; 