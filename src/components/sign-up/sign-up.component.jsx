import React from 'react';
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Password didn't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (err) {
			console.log(`There was a error in signup: ${err.message}`);
		}
	};

	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I dont have a account</h2>
				<span>Sign up with an email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						type="text"
						label="Name"
						onChange={this.handleChange}
						value={this.state.displayName}
						required
					/>
					<FormInput
						name="email"
						type="email"
						label="Email"
						onChange={this.handleChange}
						value={this.state.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						onChange={this.handleChange}
						value={this.state.password}
						required
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						label="Confirm Password"
						onChange={this.handleChange}
						value={this.state.confirmPassword}
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
