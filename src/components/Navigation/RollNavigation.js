import React from 'react';

const RollNavigation = ({onRollChange, initialstate}) => {
    if (initialstate === false) {
    return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
    <p onClick={() => onRollChange("rollAgain")} className='f5 center link dib black pa3 pointer' > Roll Again?</p>
    </nav>
     )} else{
      return(null
        
        )
    }
   
};




export default RollNavigation; 