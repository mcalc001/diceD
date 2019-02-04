import React from 'react';
import './Register.css'


class Register extends React.Component {
   	constructor(props) {
	super(props);
	this.state = {
		email: '',
		password: '',
		name: '',
	  }
	}
 
	onEmailChange=(event)=> {
		this.setState({email: event.target.value})
	}
    onPasswordChange=(event)=> {
		this.setState({password: event.target.value})
	}

	onNameChange=(event)=> {
		this.setState({name: event.target.value})
	}
	onSubmitSignin = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name,
			})
		}) 
		.then(response => response.json())

		.then(user => {
			console.log(user)
			if (user.id) {
			  this.props.loadUser(user)
              this.props.onRouteChange('home')
           
			}
		})
	}
   render() {
		return(
			<article className="  border br3  white mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
			<main className="pa4 redn">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3.5 b subh redn b fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db redn fw6 subh lh-copy b f5" htmlFor="name">Name</label>
			        <input 
			        onChange={this.onNameChange}
			        className="pa2 black redn bord input-reset subh ba bg-transparent hover-bg-black  w-100" 
			        type="text" 
			        name="name"  
			        id="name"/>
			      </div>
			      <div className="mt3">
			        <label className="db subh fw6 lh-copy f5" htmlFor="email-address">Email</label>
			        <input 
			        onChange={this.onEmailChange}
			        className="pa2 subh input-reset bord ba bg-transparent hover-bg-black  w-100"
			         type="email" 
			         name="email-address" 
			          id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6  subh lh-copy f5" htmlFor="password">Password</label>
			        <input 
			        onChange={this.onPasswordChange}
			        className="b pa2  subh input-reset bord ba bg-transparent hover-bg-black  w-100" 
			        type="password" 
			        name="password"  
			        id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      onClick={this.onSubmitSignin} 
			      className=" mt2 pt4 3shadow-5  b ph3 pv2 br2 putton input-reset ba grow pointer f5 dib "
			      type="submit" value="Register"/>
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={()=> this.props.onRouteChange('signin')} 
			      className="f6 link dim  db redn  pointer ">Sign In</p>
			    </div>
			  </div>
			</main>
			</article>
	 );
}
}

export default Register;
