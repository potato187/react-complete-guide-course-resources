import React, { useEffect, useState } from 'react';
import './style.css';

export default function QuestionTimer({ timeout, onSkipQuestion = () => {}, mode }) {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		const timerId = setTimeout(onSkipQuestion, timeout);

		return () => {
			clearTimeout(timerId);
		};
	}, [timeout, onSkipQuestion]);

	useEffect(() => {
		const timerId = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
		}, 10);

		return () => {
			clearInterval(timerId);
		};
	}, []);

	return <progress className={`question-timer ${mode}`} value={remainingTime} max={timeout} />;
}
