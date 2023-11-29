import { useState } from 'react';
import TabButton from '../TabButton';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import Section from '../Section';
import { EXAMPLES } from '../../data';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	const handleClick = (topic) => {
		setSelectedTopic(topic);
	};

	return (
		<Section id='examples' title='Examples'>
			<Tabs
				buttons={
					<>
						<TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>
							Components
						</TabButton>
						<TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>
							Jsx
						</TabButton>
						<TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>
							Props
						</TabButton>
						<TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>
							State
						</TabButton>
					</>
				}>
				<TabContent example={EXAMPLES[selectedTopic]} />
			</Tabs>
		</Section>
	);
}
