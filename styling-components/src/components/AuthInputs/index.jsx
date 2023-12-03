import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

export default function AuthInputs() {
	const [submitted, setSubmitted] = useState(false);
	const [enteredUser, setEnteredUser] = useState({
		email: '',
		password: '',
	});

	const emailNotValid = submitted && !enteredUser.email.includes('@');
	const passwordNotValid = submitted && enteredUser.password.trim().length < 6;

	const handleInputChange = (event) => {
		const { value, name } = event.target;
		setEnteredUser((prevUser) => {
			return { ...prevUser, [name]: value };
		});
	};

	const handleLogin = () => {
		setSubmitted(true);
	};

	return (
		<form id='auth-inputs' className='mx-auto p-5 bg-stone-900 rounded shadow-md w-full max-w-sm'>
			<div className='flex flex-col gap-4 mb-6'>
				<Input
					invalid={emailNotValid}
					name='email'
					type='email'
					label='Email'
					onChange={handleInputChange}
					autoComplete='username'
				/>
				<Input
					type='password'
					name='password'
					label='Password'
					invalid={passwordNotValid}
					onChange={handleInputChange}
					autoComplete='current-password'
				/>
			</div>
			<div className='flex justify-between'>
				<button type='button' className='bg-transparent text-yellow-500 hover:text-yellow-900 transition-colors'>
					Create a new account
				</button>
				<Button onClick={handleLogin}>Sign In</Button>
			</div>
		</form>
	);
}
