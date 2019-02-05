import React from 'react';

const Scroll = (props) => {
	 
	return( 
		<div className=" tc pa3 white " style={{overflowY:'scroll', border: '0px' , height:'270px',  }}>
		 {props.children}
        </div>
		);
};



export default  Scroll;