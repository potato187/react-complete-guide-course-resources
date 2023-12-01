import React, { useId, useState } from 'react';
import './style.css';

export default function Input({ initialValue, label, ...props }) {
	const id = useId();

	return (
		<div className='input'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
		</div>
	);
}
