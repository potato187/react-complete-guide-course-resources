import { styled, css } from 'styled-components';

export const ControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;

export const ActionsContainer = styled.div(() => {
	return css`
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	`;
});

export const TextButton = styled.button(() => {
	return css`
		color: #f0b322;
		border: none;

		&:hover {
			color: #f0920e;
		}
	`;
});
