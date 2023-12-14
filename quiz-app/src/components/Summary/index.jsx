import React from 'react';
import quizCompletedImage from '../../assets/quiz-complete.png';
import './style.css';
import { QUESTIONS } from '../../data';
import classNames from 'classnames';

export default function Summary({ userAnswers = [] }) {
	const skippedAnswers = userAnswers.filter((answer) => !answer).length;
	const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;

	const totalQuestions = QUESTIONS.length;
	const skippedAnswerPercent = Math.round((skippedAnswers / totalQuestions) * 100);
	const correctAnswerPercent = Math.round((correctAnswers / totalQuestions) * 100);
	const wrongAnswerPercent = 100 - skippedAnswerPercent - correctAnswerPercent;

	return (
		<div className='summary'>
			<img src={quizCompletedImage} alt='Trophy Icon' />
			<h2>Quiz completed!</h2>
			<div className='summary-stats'>
				<p>
					<span className='number'>{skippedAnswerPercent}%</span>
					<span className='text'>skipped</span>
				</p>
				<p>
					<span className='number'>{correctAnswerPercent}%</span>
					<span className='text'>answered correctly</span>
				</p>
				<p>
					<span className='number'>{wrongAnswerPercent}%</span>
					<span className='text'>answered incorrectly</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer, index) => {
					const isCorrect = QUESTIONS[index].answers[0] === answer;
					const classes = classNames('user-answer', {
						skipped: !answer,
						correct: isCorrect,
						wrong: !isCorrect,
					});

					return (
						<li key={index}>
							<h3>{index + 1}</h3>
							<p className='question'>{QUESTIONS[index].text}</p>
							<p className={classes}>{answer ?? 'Skipped'}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
