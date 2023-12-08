import React from 'react';
import Button from '../Button';

const formattedDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
};

export default function SelectedProject({ project, onDeleteProject, children }) {
	const { id, title, description, dueDate } = project;

	return (
		<div className='w-[32rem] mt-16'>
			<header className='pb-4 border-b-2 border-stone-300'>
				<div className='flex justify-between mb-4'>
					<h2 className='font-bold text-3xl text-stone-600'>{title}</h2>
					<Button onClick={onDeleteProject}>Delete</Button>
				</div>
				<div>
					<p className='mb-4 text-stone-400'>{formattedDate(dueDate)}</p>
					<p className='text-stone-600 whitespace-pre-wrap'>{description}</p>
				</div>
			</header>
			{children}
		</div>
	);
}
