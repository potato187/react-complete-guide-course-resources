export default function Tabs({ TabWrapper = 'menu', buttons, children }) {
	return (
		<>
			<TabWrapper>{buttons}</TabWrapper>
			{children}
		</>
	);
}
