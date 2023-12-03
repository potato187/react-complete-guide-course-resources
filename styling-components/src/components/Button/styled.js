import { css, styled } from 'styled-components';

export const StyledButton = styled.button(() => {
	return css`
		padding: 1rem 2rem;
		font-weight: 600;
		text-transform: uppercase;
		border-radius: 0.25rem;
		color: #1f2937;
		background-color: #f0b322;
		border-radius: 6px;
		border: none;

		&:hover {
			background-color: #f0920e;
		}
	`;
});
