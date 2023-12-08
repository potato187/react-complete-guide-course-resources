import React, { useState } from 'react';
import Button from '../Button';

export default function NewTask({ onAddTask }) {
	const [value, setValue] = useState('');

	const handleClick = () => {
		if (value.trim()) {
			onAddTask({
				id: crypto.randomUUID(),
				text: value,
			});
			setValue('');
		}
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className='flex gap-2'>
			<label className='block flex-grow'>
				<input
					className='w-full px-2 py-2 rounded-sm text-sm overflow-hidden text-ellipsis bg-stone-200 outline-none border border-transparent focus:border-stone-400 transition-colors'
					type='text'
					value={value}
					onChange={handleChange}
				/>
			</label>
			<Button variant='text' className='flex-shrink-0' onClick={handleClick}>
				Add Task
			</Button>
		</div>
	);
}
