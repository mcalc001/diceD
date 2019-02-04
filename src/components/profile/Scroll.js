import React from 'react';

const Scroll = (props) => {
	 
	return( 
		<div className="pl3 pr1 white " style={{overflowY:'scroll', border: '0px' , height:'270px',  }}>
		 {props.children}
        </div>
		);
};



export default  Scroll;