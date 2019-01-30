import React from 'react';

import dice1 from '../Gifs/1-1.gif';
import dice2 from '../Gifs/2-2.gif';
import dice3 from '../Gifs/3-3.gif';
import dice4 from '../Gifs/4-4.gif';
import dice5 from '../Gifs/5-5.gif';
import dice6 from '../Gifs/6-6.gif';
import './ResultBox.css';


   const  matchNumbers = (number) => {
	switch(number) {
		case "1":
		return <img className=" mw5 black center flex flex-column pa2"src={dice1} alt="loadin." />
		case "2":
		return <img className=" mw5 black center flex flex-column pa2"src={dice2} alt="loadin.." />
		case "3":
		return  <img className=" mw5 black center flex flex-column pa2"src={dice3} alt="loadin..." />
		case "4":
		return <img className=" mw5 black center flex flex-column pa2"src={dice4} alt="loadin...." />
		case "5":
		return <img className=" mw5 black center flex flex-column pa2"src={dice5} alt="loadin....." />
		case "6":
		return <img className=" mw5 black center flex flex-column pa2"src={dice6} alt="loadin......" />
		default:
		return console.log("notMatched");
	}
}

const ResultsBox = ({result, number, onRollChange, onProfileUpdate}) => {
   let finalResult = result.replace(/"/g, '');
    
  

  return(

  	<div id=" ">  
    
      <div id="test">  
       {matchNumbers(number)}
      </div>

  <div className=" resultBox shadow-3 ph4 tc w-100 mw5.5 mw6-ns center pa3 mb4">
  <h1 className=" tc f4 br3 br--top black-60 mv0 pv2 ">The Dice Have Chosen </h1>
  <div className=" pa3 bt b--black-10">
    <p className=" tc f6 f5-ns lh-copy measure">  
       {finalResult}
    </p>
     <p onClick={() => onRollChange("rollAgain")} className='f5 center link dib black pa3 pointer' > Roll Again?</p>
     <p onClick={() => onProfileUpdate(finalResult)} className='f5 center link dib black pa3 pointer' > Save Roll?</p>

  </div>
  </div>
  </div>
   
	)
};


export default ResultsBox; 