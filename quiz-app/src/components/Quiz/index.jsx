import React, { useCallback, useState } from 'react';
import { QUESTIONS } from '../../data/index.js';
import Summary from '../Summary/index.jsx';
import Question from './Question/index.jsx';
import './style.css';

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	const handleSelectAnswer = useCallback((selectedAnswer) => {
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectedAnswer];
		});
	}, []);

	return (
		<main>
			{activeQuestionIndex === QUESTIONS.length && <Summary userAnswers={userAnswers} />}
			{activeQuestionIndex < QUESTIONS.length && (
				<div className='quiz'>
					<Question key={activeQuestionIndex} currentIndex={activeQuestionIndex} onSelect={handleSelectAnswer} />
				</div>
			)}
		</main>
	);
}
