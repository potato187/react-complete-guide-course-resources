import { useId } from 'react';
import { StyledInput, StyledLabel } from './styled';

export default function Input({ label, invalid, ...props }) {
	const domId = useId();
	return (
		<p>
			<StyledLabel htmlFor={domId} $invalid={invalid}>
				{label}
			</StyledLabel>
			<StyledInput id={domId} $invalid={invalid} {...props} />
		</p>
	);
}
