import React from 'react';
import './Header.css';
import Icon from './icon-01.png';

const Header =({ isProfileOpen, toggleModalm, name}) => {
	
  return (

<div >

     <img src={Icon}  className="h4 w4  "  alt="avatar" />
  	
     <h2 className="mb0 b pb2 mt2">{name} </h2>
     <h2 className="text mb2 mt0 ">Veiw your posts below </h2>
    

 </div> 

  )
}

export default Header; 

 