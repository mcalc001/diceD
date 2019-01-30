import React from 'react';
import { Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';


class ProfileIcon extends React.Component {
   constructor(props){
   	super(props);
   
   	this.state={
   		dropdownOpen: false
   	}
   }

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

   render(){
   	return(
   		<div className='pa4 tc'>
   		 <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}>
			  <img
			      src="http://tachyons.io/img/logo.jpg"
			      className="h3 w3 dib" alt="avatar"/>

        </DropdownToggle>
         <DropdownMenu 
          right
          className='b--transparent shadow-5 tc '
          style={{marginTop: '20px', backgroundColor: 'rgba(2 55, 255, 255, 0.5)'}}>
          <DropdownItem onClick={() =>  this.props.onRouteChange('signout')} >sign out</DropdownItem>
          <DropdownItem onClick={this.props.toggleModal}> user page </DropdownItem>
        </DropdownMenu>
      </Dropdown>
   		
   </div>
   	)
  }
}



export default ProfileIcon; 