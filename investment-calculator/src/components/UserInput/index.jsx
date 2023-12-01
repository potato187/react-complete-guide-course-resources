import React from 'react';
import './style.css';
import InputGroup from '../InputGroup';
import Input from '../Input';

export default function UserInput({ investment, onChange }) {
	return (
		<div id='user-input'>
			<InputGroup>
				<Input
					label='initial investment'
					type='number'
					name='initialInvestment'
					value={investment.initialInvestment}
					onChange={onChange}
				/>
				<Input
					label='annual investment'
					type='number'
					name='annualInvestment'
					value={investment.annualInvestment}
					onChange={onChange}
				/>
			</InputGroup>
			<InputGroup>
				<Input
					label='expected return'
					type='number'
					name='expectedReturn'
					value={investment.expectedReturn}
					onChange={onChange}
				/>
				<Input label='duration' type='number' name='duration' value={investment.duration} onChange={onChange} />
			</InputGroup>
		</div>
	);
}
