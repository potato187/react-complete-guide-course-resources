import { useId, useRef, useState } from 'react';

export default function Player() {
	const domId = useId();
	const playerNameRef = useRef();
	const [playerName, setPlayerName] = useState('');

	const handleClick = () => {
		setPlayerName(playerNameRef.current.value);
	};

	return (
		<section id='player'>
			<h2>Welcome {playerName ?? 'unknown entity'}</h2>
			<p>
				<input ref={playerNameRef} id={domId} type='text' />
				<button type='button' onClick={handleClick}>
					Set Name
				</button>
			</p>
		</section>
	);
}
