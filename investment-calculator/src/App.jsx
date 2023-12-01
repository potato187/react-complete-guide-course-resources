import React, { useState } from 'react';
import Header from './components/Header';
import TableResult from './components/TableResult';
import UserInput from './components/UserInput';
import {
	ANNUAL_INVESTMENT_DEFAULT,
	DURATION_DEFAULT,
	EXPECTED_RETURN_DEFAULT,
	INITIAL_INVESTMENT_DEFAULT,
} from './constant';

export default function App() {
	const [investment, setInvestment] = useState({
		initialInvestment: INITIAL_INVESTMENT_DEFAULT,
		annualInvestment: ANNUAL_INVESTMENT_DEFAULT,
		expectedReturn: EXPECTED_RETURN_DEFAULT,
		duration: DURATION_DEFAULT,
	});

	const isValidDuration = investment.duration >= 1;

	const handleChange = (event) => {
		const { value, name } = event.target;
		setInvestment((prevInvestment) => ({ ...prevInvestment, [name]: Math.abs(+value) }));
	};

	return (
		<>
			<Header />
			<main>
				<UserInput investment={investment} onChange={handleChange} />
				{!isValidDuration && <p className='center'>Please enter a valid duration</p>}
				{isValidDuration && <TableResult investment={investment} />}
			</main>
		</>
	);
}
