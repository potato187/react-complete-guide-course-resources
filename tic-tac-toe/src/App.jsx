import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Player from './components/Player';
import Logs from './components/Logs';
import { deriveActivePlayer } from './utils';
import { INITIAL_GAME_BOARD, PLAYERS, WINNING_COMBINATIONS } from './constant';
import GameOver from './components/GameOver';

const deriveGameBoard = (gameTurns) => {
	const gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];

	for (const gameTurn of gameTurns) {
		const { square, player } = gameTurn;
		gameBoard[square.row][square.col] = player;
	}

	return gameBoard;
};

const derivePlayerWin = (players, gameBoard) => {
	let winner = undefined;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
			winner = players[firstSquareSymbol];
		}
	}

	return winner;
};

export default function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, getGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = derivePlayerWin(players, gameBoard);

	const hasDraw = !winner && gameTurns.length === 9;

	const handleSelectSquare = (rowIndex, colIndex) => {
		if (!winner) {
			getGameTurns((prevGameTurns) => {
				const currentPlayer = deriveActivePlayer(prevGameTurns);
				return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurns];
			});
		}
	};

	const handleRestart = () => {
		getGameTurns([]);
	};

	const handlePlayerChangeName = (symbol, newName) => {
		setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: newName }));
	};

	return (
		<main>
			<Header />
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName={PLAYERS.X}
						symbol='X'
						isActive={activePlayer === 'X'}
						onChangeName={handlePlayerChangeName}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol='O'
						isActive={activePlayer === 'O'}
						onChangeName={handlePlayerChangeName}
					/>
				</ol>
				{winner || hasDraw ? <GameOver winner={winner} onRestart={handleRestart} /> : null}
				<GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
			</div>
			<Logs gameTurns={gameTurns} />
		</main>
	);
}
