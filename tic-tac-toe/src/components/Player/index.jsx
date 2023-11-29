import { useState } from 'react';
import './style.css';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);
	const btnCaption = isEditing ? 'Save' : 'Edit';
	const classNames = [isActive && 'active'].filter(Boolean);

	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	const handleEditClick = () => {
		setIsEditing((prevState) => !prevState);
		if (isEditing && playerName !== initialName) {
			onChangeName(symbol, playerName);
		}
	};

	return (
		<li className={classNames}>
			<span className='player'>
				<label className='player-name'>
					<span>{playerName}</span>
					<input data-edit={isEditing} type='text' value={playerName} onChange={handleChange} required />
				</label>
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
