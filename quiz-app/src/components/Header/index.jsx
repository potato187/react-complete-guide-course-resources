import React from 'react';
import headerLogo from '../../assets/quiz-logo.png';
import './style.css';

export default function Header() {
	return (
		<header>
			<img src={headerLogo} alt='' />
			<h1>ReactQuiz</h1>
		</header>
	);
}
