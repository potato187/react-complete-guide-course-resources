import { css, styled } from 'styled-components';

export const StyledLabel = styled.label(({ $invalid }) => {
	return css`
		display: block;
		margin-bottom: 0.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: ${$invalid ? '#f87171' : '#6b7280'};
	`;
});

export const StyledInput = styled.input(({ $invalid }) => {
	return css`
		width: 100%;
		padding: 0.75rem 1rem;
		line-height: 1.5;
		background-color: ${$invalid ? '#fed2d2' : '#d1d5db'};
		color: ${$invalid ? '#ef4444' : '#374151'};
		border: 1px solid ${$invalid ? '#f73f3f' : 'transparent'};
		border-radius: 0.25rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	`;
});
