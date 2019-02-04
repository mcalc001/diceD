import React from 'react';
import dice from './dice.gif'
import './Header.css';


const Header = () => {
return(
    <div  >
    <img className="  black center pao h5 w5 flex-column" src={dice} alt="loading..." />
     <h2 className=" b pb2 f2 tc pb col "> Let the Dice Decide</h2>  
       <h3 className="  pr3 pl3 mw7 center f3 tc pb4 poo " > Bored of making your own decisions? Whether it's Brexit, or what to have for tea?    
    Well thanks to <strong>Dice Decide</strong> you don’t have to, now you can simply add up to six decisions that you’re wrestling with into the boxes below, hit roll and let the<strong> Dice Decide </strong>for you.</h3>                                         
   </div>
    );
}

export default Header;  