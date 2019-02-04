import React from 'react';

const Navigation = ({onRouteChange, initialstate}) => {
    if (initialstate === false){
    return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
    <p onClick={() => onRouteChange('roll')} className='f5 link dib black fcdxs underline pa3 pointer' > Roll Again?</p>
    </nav>
     )} else{
      return(
        <div>

        </div>  
      

        )



    }
   
};




export default Navigation; 