import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import './style.css';

export default function Header() {
	return (
		<header id='header'>
			<img src={logo} alt='Invest calculator' />
			<h1>Investment Calculator</h1>
		</header>
	);
}
