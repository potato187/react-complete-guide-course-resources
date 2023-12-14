import React, { useEffect, useRef, useState } from 'react';
import { QUESTIONS } from '../../../data/index.js';
import Answers from '../Answers/index.jsx';
import QuestionTimer from '../QuestionTimer/index.jsx';
import './style.css';
import { ANSWER_STATE } from '../constant.js';

const INITIAL_ANSWER_STATE = {
	selectedAnswer: null,
	state: ANSWER_STATE.NONE,
};

const getTimer = (state) => {
	switch (state) {
		case ANSWER_STATE.CORRECT:
		case ANSWER_STATE.WRONG:
			return 2000;
		case ANSWER_STATE.ANSWERED:
			return 1000;
		default:
			return 5000;
	}
};

export default function Question({ currentIndex, onSelect }) {
	const { text } = QUESTIONS[currentIndex];
	const [answerState, setAnswerSate] = useState(INITIAL_ANSWER_STATE);

	const timer = getTimer(answerState.state);

	const handleSelectAnswer = (selectedAnswer) => {
		setAnswerSate({
			selectedAnswer,
			state: ANSWER_STATE.ANSWERED,
		});

		setTimeout(() => {
			setAnswerSate({
				selectedAnswer,
				state: selectedAnswer === QUESTIONS[currentIndex].answers[0] ? ANSWER_STATE.CORRECT : ANSWER_STATE.WRONG,
			});

			setTimeout(() => {
				onSelect(selectedAnswer);
			}, 2000);
		}, 1000);
	};

	return (
		<div className='question'>
			<QuestionTimer
				key={`question-timer-${timer}`}
				timeout={timer}
				onSkipQuestion={!answerState.selectedAnswer ? onSelect : null}
				mode={answerState.state}
			/>
			<h2>{text}</h2>
			<Answers questionIndex={currentIndex} answerState={answerState} onSelect={handleSelectAnswer} />
		</div>
	);
}
