import { useRef } from 'react';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';

export default function NewProject({ onAddProject, onCancelProject }) {
	const modalRef = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	const handleSave = () => {
		const title = titleRef.current.value;
		const description = descriptionRef.current.value;
		const dueDate = dueDateRef.current.value;

		if (!title.trim() || !description.trim() || !dueDate.trim()) {
			modalRef.current.open();
			return;
		}

		onAddProject({
			title,
			description,
			dueDate,
		});
	};

	return (
		<>
			<div className='w-[32rem] mt-16'>
				<menu className='flex justify-end gap-4 my-4'>
					<li>
						<Button variant='text' onClick={onCancelProject}>
							Cancel
						</Button>
					</li>
					<li>
						<Button onClick={handleSave}>Save</Button>
					</li>
				</menu>
				<div className='flex flex-col gap-4'>
					<Input ref={titleRef} label='Title' />
					<Input ref={descriptionRef} label='Description' element='textarea' rows={4} />
					<Input ref={dueDateRef} label='Due Date' type='date' />
				</div>
			</div>
			<Modal ref={modalRef}>
				<div className='p-2'>
					<h2 className='uppercase font-bold text-lg text-stone-700'>Invalid Input</h2>
				</div>
				<div className='p-2 text-stone-600'>
					<p className='mb-2'>Oops ... looks like you forgot to enter a value</p>
					<p>Please make sure you provide a valid value for every input field.</p>
				</div>
				<form method='dialog' className='flex justify-end p-2'>
					<Button>Okay</Button>
				</form>
			</Modal>
		</>
	);
}
