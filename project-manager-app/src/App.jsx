import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import { produce } from 'immer';
import SelectedProject from './components/SelectedProject';
import Tasks from './components/Tasks';

const ACTION = {
	ADDING: 'adding',
	NOTHING_SELECTED: 'nothing',
	SELECTED: 'selected',
};

function App() {
	const [projectsState, setProjectsState] = useState({
		action: {
			type: ACTION.NOTHING_SELECTED,
			selectedId: null,
		},
		projects: [
			{
				id: '7e7211e8-1695-4ca9-894f-3a545a420753',
				title: 'Test Title',
				description: 'test description',
				dueDate: '12/08/2023',
				tasks: [],
			},
		],
	});

	const selectedProject = projectsState.projects.find((project) => project.id === projectsState.action.selectedId);

	const handleStartAddProject = () => {
		setProjectsState(
			produce((draft) => {
				draft.action.type = ACTION.ADDING;
				draft.action.selectedId = null;
			}),
		);
	};

	const handleAddProject = (projectData) => {
		setProjectsState(
			produce((draft) => {
				draft.action.type = ACTION.NOTHING_SELECTED;
				draft.action.selectedId = null;
				draft.projects.push({ id: crypto.randomUUID(), ...projectData, tasks: [] });
			}),
		);
	};

	const handleSelectProject = (id) => {
		setProjectsState(
			produce((draft) => {
				draft.action.type = ACTION.SELECTED;
				draft.action.selectedId = id;
			}),
		);
	};

	const handleCancelAddProject = () => {
		setProjectsState(
			produce((draft) => {
				draft.action.type = ACTION.NOTHING_SELECTED;
				draft.action.selectedId = null;
			}),
		);
	};

	const handleDeleteProject = () => {
		setProjectsState(
			produce((draft) => {
				const projectId = draft.action.selectedId;
				const projectIdx = draft.projects.findIndex((project) => project.id === projectId);
				draft.action.type = ACTION.NOTHING_SELECTED;
				draft.action.selectedId = null;
				draft.projects.splice(projectIdx, 1);
			}),
		);
	};

	const handleAddTask = (task) => {
		setProjectsState(
			produce((draft) => {
				const { selectedId } = draft.action;
				const projectIndex = draft.projects.findIndex((project) => project.id === selectedId);
				draft.projects[projectIndex].tasks.unshift(task);
			}),
		);
	};
	const handleClearTask = (taskId) => {
		setProjectsState(
			produce((draft) => {
				const { selectedId } = draft.action;
				const projectIndex = draft.projects.findIndex((project) => project.id === selectedId);
				const taskIndex = draft.projects[projectIndex].tasks.findIndex((task) => task.id === taskId);
				draft.projects[projectIndex].tasks.splice(taskIndex, 1);
			}),
		);
	};

	return (
		<main className='h-screen py-8 flex gap-8'>
			<ProjectSidebar
				selectedProjectId={selectedProject?.id}
				projects={projectsState.projects}
				onStartAddProject={handleStartAddProject}
				onSelectProject={handleSelectProject}
			/>
			{
				{
					[ACTION.NOTHING_SELECTED]: <NoProjectSelected onStartAddProject={handleStartAddProject} />,
					[ACTION.ADDING]: <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />,
					[ACTION.SELECTED]: (
						<SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject}>
							<Tasks tasks={selectedProject?.tasks} onAddTask={handleAddTask} onClearTask={handleClearTask} />
						</SelectedProject>
					),
				}[projectsState.action.type]
			}
		</main>
	);
}

export default App;
