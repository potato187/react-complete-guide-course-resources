import classNames from 'classnames';

export default function Button({ variant = 'primary', size = 'default', className, children, ...props }) {
	const classes = classNames(
		'transition-colors',
		{
			'px-4 py-2 text-sm leading-tight rounded-sm': size === 'default',
			'bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100': variant === 'primary',
			'bg-stone-800 text-stone-50 hover:bg-stone-950': variant === 'secondary',
			'text-stone-800 hover:text-stone-950': variant === 'text',
		},
		className,
	);

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}
