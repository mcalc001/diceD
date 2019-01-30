import React from 'react';


const Header =({ isProfileOpen, toggleModalm, name}) => {
	
  return (
  	<div style={{display: 'flex', justifyContent: 'center'}}>
      <h1 >{name} </h1>
      <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib" alt="avatar"/>
    </div> 
  	)
}

export default Header; 