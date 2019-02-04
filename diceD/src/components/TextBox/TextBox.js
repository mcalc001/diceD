import React from 'react';
import './TextBox.css'

//function that randomly picks a string from array
  const onRandomise = (a) => {
  var rand = a[Math.floor(Math.random() * a.length)];
  return rand;
     }

class TextBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      box1: '',
      box2: '',
      box3: '',
      box4: '',
      box5: '',
      box6: '',
      half: true,
    }
    
  }
     box1Change
    this.setState({box2: event.target.value}) 
  }

  box3Change=(event)=> {
    this.setState({box3: event.target.value}) 
  }

  box4Change=(event)=> {
    this.setState({box4: event.target.value})
  }

  box5Change=(event)=> {
    this.setState({box5: event.target.value}) 
  }

  box6Change=(event)=> {
    this.setState({box6: event.target.value}) 
  }
  
//mapsover this.state if there is something in the state(imputted by the user) it passes it into newArray.
handleSubmit = (evt) => {
  const newArray =[]
    Object.entries(this.state).map(value => { 
    if (value[1].length > "") {
    return( newArray.push(value[0]))
  }});
   this.matchNumbers(onRandomise(newArray))
};


  passProps = (result, number) =>{
       var props = this.props;
       var myJSON = JSON.stringify(result);
       return props.onRoll(myJSON, number);
  
  }

  // higher order function that recieves the number props from a onRandomise function
  // this function by aan onlick on the 'roll' button.
  matchNumbers = (props) => {
    console.log(props)
  switch(props) {
    case "box1":
    return this.passProps(this.state.box1, "1")
    case "box2":
    return this.passProps(this.state.box2, "2")
    case "box3":
    return this.passProps(this.state.box3, "3")
    case "box4":
    return this.passProps(this.state.box4, "4")
    case "box5":
    return this.passProps(this.state.box5, "5")
    case "box6":
    return this.passProps(this.state.box6, "6")
    default:
    return console.log("notMatched");
  }
}
  
   render() {

        return(

  <article className="  shadow-3 ph4 tc w-100 mw5.5 mw6-ns center pa3 mb4  ">
     <div  >
      <label htmlFor="comment"
       className=" pv2 f6 pa1 b db mb2 "> 
     <span className="normal "></span></label>
    <textarea 
     onChange={this.box1Change}
     id="box1"
     name="box1" 
     className={(this.state.box1 ? "center tc bg db border-box w-100 measure ba bord pa3 br2 mb2" : "textbox1 center tc bg db border-box w-100 measure ba bord pa3 br2 mb2")}
     aria-describedby="comment-desc">
     </textarea>
  </div>

     <div>
      <label htmlFor="comment"
       className="f6 pa1 b db mb2">
     <span className="normal"></span></label>
    <textarea 
     onChange={this.box2Change}
     id="box2"
     name="box2" 
     className={(this.state.box2 ? "center tc bg db border-box w-100 measure ba bord pa3 br2 mb2" : "textbox2 center tc bg db border-box w-100 measure ba bord pa3 br2 mb2")}
     aria-describedby="comment-desc">
     </textarea>
  </div>


     <div>
      <label htmlFor="comment"
       className="f6 pa1 b db mb2">
     <span className="normal black-60"></span></label>
    <textarea 
     onChange={this.box3Change}
     id="box3"
     name="box3" 
     className={(this.state.box3 ? "center tc bg db border-box w-100 measure ba bord pa3 br2 mb2" : "textbox3 center tc bg db border-box w-100 measure ba bord pa3 br2 mb2")}
     aria-describedby="comment-desc">
     </textarea>
  </div>


     <div>
      <label htmlFor="comment"
       className="f6 pa1 b db mb2">
     <span className="normal black-60"></span></label>
    <textarea 
     onChange={this.box4Change}
     id="box4"
     name="box4" 
     className={(this.state.box4 ? "center tc bg db border-box w-100 measure ba bord pa3 br2 mb2" : "textbox4 center tc bg db border-box w-100 measure ba bord pa3 br2 mb2")}
     aria-describedby="comment-desc">
     </textarea>
  </div>


     <div>
      <label htmlFor="comment"
       className="f6 pa1 b db mb2">
     <span className="normal black-60"></span></label>
    <textarea 
     onChange={this.box5Change}
     id="box5"
     name="box5"
     className={(this.state.box5 ? "center tc bg db border-box w-100 measure ba bord pa3 br2 mb2" : "textbox5 center tc bg db border-box w-100 measure ba bord pa3 br2 mb2")} 
     aria-describedby="comment-desc">
     </textarea>
  </div>


     <div>
      <label htmlFor="comment"
       className="f6 b pa1 db mb2">
     <span className="normal black-60"></span></label>
    <textarea 
     onChange={this.box6Change}
     id="box6"
     name="box6" 
     className={(this.state.box6 ? "center tc bg db border-box w-100 measure ba bord pa3 br2 mb2" : "textbox6 center tc bg db border-box w-100 measure ba bord pa3 br2 mb2")}
     aria-describedby="comment-desc">
     </textarea>
  </div>

     <div className="pa2 pv4">
    <button onClick={this.handleSubmit} className=" shadow-5 pa5 b ph3 pv3 br2 putton input-reset ba grow pointer f5 dib">Roll</button>
     </div>
  </article>
  )}
}
export default TextBox;