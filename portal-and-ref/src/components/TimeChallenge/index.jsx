import React, { useRef, useState } from 'react';
import ResultModal from '../ResultModal/index';

export default function TimeChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();
	const duration = targetTime * 1000;
	const [timeRemaining, setTimeRemaining] = useState(duration);
	const timerIsActive = timeRemaining > 0 && timeRemaining < duration;

	if (timeRemaining <= 0) {
		dialog.current.open();
		clearInterval(timer.current);
		setTimeRemaining(duration);
	}

	const handleStart = () => {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
		}, 10);
	};

	const handleStop = () => {
		dialog.current.open();
		clearInterval(timer.current);
	};

	const handleReset = () => {
		setTimeRemaining(duration);
	};

	return (
		<>
			<ResultModal ref={dialog} targetTime={duration} timeRemaining={timeRemaining} onReset={handleReset} />
			<section className='challenge'>
				<h2>{title}</h2>
				<p>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? 'Stop' : 'Start'} Challenge
					</button>
				</p>
				<p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Time is running...' : 'Timer Active'}</p>
			</section>
		</>
	);
}
