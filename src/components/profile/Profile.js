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
   
    fetch(`http://localhost:3000/profile/${this.state.id}`,{
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
  // const{ rollData } = this.state;
  const data = dat.reverse();
  
     // const data = List;
  
   return ( 

      	<div className="profile-modal">
      	 <article className=" insideCoponent shadow-3   tc pa3 w6 mw6 mw6-ns center    ">
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
          data={"No posts yet, you had better get rolling!"} 
          
                  /> 

              )
        }

          }
        )  



      }

             </Scroll>     
           <button className=" mt2 pt4 3shadow-5  b ph3 pv2 br2 putton input-reset ba grow pointer f5 dib mr2 " onClick={this.props.toggleModal}>Return</button>
        </article>
      </div> 
  	)
  }
}



export default Profile; 