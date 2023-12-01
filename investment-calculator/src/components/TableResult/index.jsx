import React from 'react';
import './style.css';
import { calculateInvestmentResults, formatter } from '../../util/investment';

export default function TableResult({ investment }) {
	const investmentResults = calculateInvestmentResults(investment);

	return (
		<table id='result'>
			<thead>
				<th className='center'>Year</th>
				<th className='center'>Investment Value</th>
				<th className='center'>Interest(Year)</th>
				<th className='center'>Total Interest</th>
				<th className='center'>Interest Capital</th>
			</thead>
			<tbody>
				{investmentResults.map(
					({ year, valueEndOfYear, interest, totalInterest, interestCapital, annualInvestment }) => (
						<tr key={year}>
							<td>{year}</td>
							<td>{formatter.format(valueEndOfYear)}</td>
							<td>{formatter.format(interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(interestCapital)}</td>
						</tr>
					),
				)}
			</tbody>
		</table>
	);
}
