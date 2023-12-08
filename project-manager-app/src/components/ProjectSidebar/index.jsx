import classNames from 'classnames';
import Button from '../Button';

export default function ProjectSidebar({ projects = [], selectedProjectId, onStartAddProject, onSelectProject }) {
	return (
		<aside className='w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl'>
			<h2 className='font-bold uppercase md:text-xl text-stone-200 mb-8'>Your Projects</h2>
			<div className='mb-4'>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<ul className='[&>*+*]:mt-2'>
				{projects.map(({ id, title }) => (
					<li key={id} className='w-full'>
						<Button
							className={classNames('w-full text-start', {
								'bg-stone-800 text-stone-200 pointer-events-none': id === selectedProjectId,
							})}
							onClick={() => onSelectProject(id)}>
							{title}
						</Button>
					</li>
				))}
			</ul>
		</aside>
	);
}
