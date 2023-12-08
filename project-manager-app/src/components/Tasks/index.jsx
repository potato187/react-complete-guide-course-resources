import React from 'react';
import Button from '../Button';
import NewTask from '../NewTask';

export default function Tasks({ tasks = [], onAddTask = () => null, onClearTask = () => null }) {
	return (
		<section>
			<h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
			<NewTask onAddTask={onAddTask} />
			{!tasks.length && <p className='text-stone-800 my-4'></p>}
			{!!tasks.length && (
				<ul className='p-4 mt-4 rounded-md bg-stone-100 [&>*+*]:mt-2'>
					{tasks.map((task) => {
						return (
							<li key={task.id} className='flex gap-2 flex-nowrap'>
								<span className='block flex-grow'>{task.text}</span>
								<Button
									variant='text'
									className='flex-shrink-0 hover:text-red-500'
									onClick={() => onClearTask(task.id)}>
									Clear
								</Button>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
