export default function TabButton({ isSelected, children, ...props }) {
	const classNames = [props.className, isSelected && 'active'].filter(Boolean);

	return (
		<button className={classNames} {...props}>
			{children}
		</button>
	);
}
