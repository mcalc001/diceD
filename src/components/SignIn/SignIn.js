import React from 'react';
import './Signin.css'


class SignIn extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		signInEmail: '',
		signInPassword: '',
	  }
	}


	onEmailChange=(event)=> {
		this.setState({signInEmail: event.target.value})
	}
    onPasswordChange=(event)=> {
		this.setState({signInPassword: event.target.value})
	}

	saveAuthTokenInSession =(token) => {
		window.sessionStorage.setItem('token', token);

	}

	onSubmitSignin = () => {
		fetch('https://fathomless-shelf-13230.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			})
		}) 
		.then(response => response.json())
		.then(data=> { 
			if (data.userId && data.success === 'true') {
		      this.saveAuthTokenInSession(data.token)
			  fetch(`https://fathomless-shelf-13230.herokuapp.com/signinPf/${data.userId}`,{
              method : 'get',
              headers: {
              'Content-Type': 'application/json',
              'Authorization': data.token
            } 
            })
            .then(resp => resp.json())
            .then( user =>{
              if (user && user.email){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
              } 
          })
        .catch(console.log)
		}
	})
}

	render() {

	  return(
		<article className="  redn cont br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 redn  mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db b redn fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input
			         onChange= {this.onEmailChange}
			         className="pa2 redn input-reset ba   w-100" 
			         type="email" 
			         name="email-address"  
			         id="email-address"/>
			      </div>
				      <div className="mv3">
				        <label className="db redn b fw6 lh-copy f6" 
				        htmlFor="password">Password</label>
				        <input
				        onChange={this.onPasswordChange}
				         className="b pa2  redn input-reset ba   w-100"
				         type="password"
				         name="password" 
				          id="password"/>
				      </div>
				    </fieldset>
					    <div className="redn">
					      <input 
					      onClick= {this.onSubmitSignin}
					      className=" mt2 pt4 3shadow-5  b ph3 pv2 br2 putton input-reset ba grow pointer f5 dib "
					      type="submit"
					      value="Sign in"/>
					   </div>
				    <div className="lh-copy mt3">
			      <p onClick={()=> this.props.onRouteChange('register')} 
			      className="f6 link dim  db redn  pointer ">Register</p>
			    </div>
			  </div>
			</main>
		</article>
	
		);
	}
}

export default SignIn;