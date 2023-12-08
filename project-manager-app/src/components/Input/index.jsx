import React, { useId, useImperativeHandle, useRef } from 'react';

export default React.forwardRef(function Input({ label, element = 'input', ...props }, ref) {
	const domId = useId();
	const Element = element;

	return (
		<div className='flex flex-col gap-1'>
			<label className='text-sm font-bold uppercase text-stone-500' htmlFor={domId}>
				{label}
			</label>
			<Element
				id={domId}
				className='w-full m-h-12 px-2 py-1 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600 transition-all overflow-hidden text-ellipsis'
				{...props}
				ref={ref}
			/>
		</div>
	);
});
