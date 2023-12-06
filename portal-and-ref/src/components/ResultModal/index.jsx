import React, { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = React.forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {
	const dialog = useRef(null);
	const useLost = timeRemaining <= 0;
	const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
	const score = Math.round((1 - timeRemaining / targetTime) * 100);

	useImperativeHandle(
		ref,
		() => {
			return {
				open() {
					dialog.current.showModal();
				},
			};
		},
		[],
	);

	return createPortal(
		<dialog ref={dialog} className='result-modal' onClose={onReset}>
			{useLost && <h2>You lost</h2>}
			{!useLost && <h2>Your score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime / 1000} seconds.</strong>
			</p>
			<p>
				You stopped the timer with <strong> {formattedTimeRemaining} seconds left</strong>
			</p>
			<form method='dialog' onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal'),
	);
});

export default ResultModal;
