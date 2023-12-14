import classNames from 'classnames';
import React, { useRef } from 'react';
import { QUESTIONS } from '../../../data';
import './style.css';
import { ANSWER_STATE } from '../constant';

const shuffledArray = (originalArray) => {
	return [...originalArray].sort(() => Math.random() - 0.5);
};

export default function Answers({ questionIndex, answerState, onSelect }) {
	const shuffledAnswers = useRef(shuffledArray(QUESTIONS[questionIndex].answers));

	const handleSelectAnswer = (answer) => {
		if (!answerState.selectedAnswer) {
			onSelect(answer);
		}
	};

	return (
		<ul className='answers'>
			{shuffledAnswers.current.map((answer) => {
				const { state, selectedAnswer } = answerState;
				const isSelected = answer === selectedAnswer;

				const classes = classNames({
					selected: isSelected && state === ANSWER_STATE.ANSWERED,
					correct: isSelected && state === ANSWER_STATE.CORRECT,
					wrong: isSelected && state === ANSWER_STATE.WRONG,
				});

				return (
					<li key={answer} className='answer'>
						<button
							disabled={state !== ANSWER_STATE.NONE}
							className={classes}
							onClick={() => handleSelectAnswer(answer)}>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
