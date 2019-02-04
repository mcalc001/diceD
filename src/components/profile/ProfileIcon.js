import React from 'react';
import { Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
 import Icon from './icon-01.png';


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
   		<div className=' items-center flex pa4 tc'>
       <h5 className='pr3'> {} </h5>
   		 <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}>
			  <img
			      src={Icon}
			      className="h3 w3 dib" alt="avatar"/>

        </DropdownToggle>
         <DropdownMenu 
          right
          className='b--transparent b shadow-5 tc '
          style={{marginTop: '20px', backgroundColor: 'rgba(2 55, 255, 255, 0.1)'}}>
          <DropdownItem header>{this.props.name}</DropdownItem>
          <DropdownItem className="b" onClick={() =>  this.props.onRouteChange('signout')} >Sign Out</DropdownItem>
          <DropdownItem className="b" onClick={this.props.toggleModal}> User Page </DropdownItem>
        </DropdownMenu>
      </Dropdown>
   		
   </div>
   	)
  }
}



export default ProfileIcon; 
