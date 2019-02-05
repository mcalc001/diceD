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

  	<div id=" mt0 pa0 ">  
    
      <div id="test mt0  pa0 ">  
       {matchNumbers(number)}
      </div>

  <div className=" mt0 resultBox shadow-4 ph4 tc w-75 mw5.5 mw6-ns center pa3 mb4">
  <h1 className=" f4  b mv0 pv2 ph3 newcolor ">The Dice Have Chosen </h1>
  <div className="  bt newcolor">
    <p className=" tc pa2 f3   lh-copy measure">  
       {finalResult}
    </p>
     
     <div className=" flex pa2  ">
     <button onClick={() => onRollChange("rollAgain")} className=" center shadow-5 b pa1 br2 putton input-reset ba grow pointer f4 dib  "> Roll again</button>

     <button onClick={() => onProfileUpdate(finalResult)} className=" center shadow-5 b pa1 br2 putton input-reset ba grow pointer f4 dib "> Save Roll</button>
      </div>
  </div>
  </div>
  </div>
   
	)
};


export default ResultsBox; 