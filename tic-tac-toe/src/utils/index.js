export const deriveActivePlayer = (gameTurns) => {
	return gameTurns?.[0]?.player === 'X' ? 'O' : 'X';
};
