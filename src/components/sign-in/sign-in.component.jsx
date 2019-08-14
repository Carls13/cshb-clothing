import React from 'react';

import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}

	}

	handleSubmit = async event =>{
		event.preventDefault();

		const { email, password } = this.state;

		try{
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			})
		} catch (error){
			console.error(error)
		}
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="email" 
						label="Email" 
						type="email" 
						value={this.state.email}
						onChange={this.handleChange} 
						required/>
					<FormInput 
						name="password"
						label="Password" 
						type="password" 
						value={this.state.password} 
						onChange={this.handleChange} 
						required/>
					<div className="buttons">
						<CustomButton 
							type="submit">
						SIGN IN 
						</CustomButton>
						<CustomButton isGoogleSignIn handleClick={signInWithGoogle}>
						SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}


}
	export default SignIn;