import React from 'react';
import ProfileIcon from '../profile/ProfileIcon';

const LoginNavigation = ({ name, onRouteChange, isSignedIn, toggleModal }) => {
		if (isSignedIn === "true"){
		return ( 
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		  <ProfileIcon name={name} onRouteChange={onRouteChange} toggleModal={toggleModal} />
		 </nav>
		 );
		} else if (isSignedIn === "false") {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		  <p onClick={() =>  onRouteChange('signin')} className='f5 b link dib black underline pa3 pointer' > Sign in </p>
		  <p onClick={() =>  onRouteChange('register')} className='f5  b link dib black underline pa3 pointer' > Register </p>
		 </nav>
        );
	} 
}
export default LoginNavigation;

