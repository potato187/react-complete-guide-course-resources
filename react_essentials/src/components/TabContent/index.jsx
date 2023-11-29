export default function TabContent({ example }) {
	if (!example) {
		return <p>Please select a topic.</p>;
	}

	const { title, description, code } = example;

	return (
		<div id='tab-content'>
			<h3>{title}</h3>
			<p>{description}</p>
			<pre>
				<code>{code}</code>
			</pre>
		</div>
	);
}
