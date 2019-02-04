import React from 'react';
import dice from './dice.gif'
import './Header.css';

 

const Header = () => {
return(
    <div  >
    <img className=" mw5 black center flex flex-column  "src={dice} alt="loading..." />
     <h2 className=" f2 tc pb col "> Let the Dice Decide</h2>  
        <h3 className="  mw6 center f4 tc pb pb3 poo " > Bored of making your own decisions? <br/> Well thanks to Dice Decide you don’t have to, now you can simply add the decisions you’re wrestling with into the different boxes, hit roll and let the Dice Decide.</h3>                                         
   </div>
    );
}

export default Header;  