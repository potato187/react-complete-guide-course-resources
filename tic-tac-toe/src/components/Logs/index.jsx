export default function Logs({ gameTurns }) {
	return (
		<ol id='log'>
			{gameTurns.map(({ square, player }) => (
				<li key={`${square.row}${square.col}`}>
					{player} select {square.row},{square.col}
				</li>
			))}
		</ol>
	);
}
