import { CORE_CONCEPTS } from '../../data';
import CoreConcept from '../CoreConcept';
import Section from '../Section';

export default function CoreConcepts() {
	return (
		<Section id='core-concepts' title='Core Concepts'>
			<ul>
				{CORE_CONCEPTS.map(({ ...contentItem }) => (
					<CoreConcept key={contentItem.title} {...contentItem} />
				))}
			</ul>
		</Section>
	);
}
