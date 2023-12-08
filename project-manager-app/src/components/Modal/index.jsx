import React, { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = React.forwardRef(({ children, ...props }, ref) => {
	const dialogRef = useRef();
	useImperativeHandle(
		ref,
		() => {
			return {
				open() {
					dialogRef.current.showModal();
				},
			};
		},
		[],
	);

	return createPortal(
		<dialog
			ref={dialogRef}
			className='backdrop:bg-stone-900/90 backdrop:transition-colors bg-transparent rounded-sm group'>
			<div className='p-4 bg-white shadow-sm rounded-md'>{children}</div>
		</dialog>,
		document.getElementById('modal-root'),
	);
});

export default Modal;
