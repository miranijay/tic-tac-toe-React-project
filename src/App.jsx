import Player from "./compnents/player.jsx"
import Gameboard from "./compnents/gameboard.jsx"
import { useState } from "react";
import Log from "./compnents/log.jsx";
import { WINNING_COMBINATIONS } from "./compnents/winningCombs.jsx";
import GameOver from "./compnents/gameover.jsx";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameturns) {
  let currentPlayer = 'X'

  if (gameturns.length > 0 && gameturns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function deriveGameBoard(gameTurns) {
  let gameboard = [...INITIAL_GAME_BOARD.map((array) => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square

    gameboard[row][col] = player
  }

  return gameboard
}

function deriveWinner(gameboard, players) {
  let winner

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameboard[combination[0].row][combination[0].column]
    const secondSquareSymbol =
      gameboard[combination[1].row][combination[1].column]
    const thirdSquareSymbol =
      gameboard[combination[2].row][combination[2].column]

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol]
    }
  }

  return winner
}

export default function App() {

  const [players, setPlayers] = useState(PLAYERS)
  const [gameturns, setgameturns] = useState([])

  const gameBoard = deriveGameBoard(gameturns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameturns.length === 9 && !winner
  const activePlayer = deriveActivePlayer(gameturns)

  function handleSelectSquare(rowindex, colindex) {

    setgameturns((prevturns) => {

      const currentPlayer = deriveActivePlayer(prevturns);
      
      const updatedturns = [
          {square: {row: rowindex, col: colindex}, player: currentPlayer},
          ...prevturns, 
        ]
      return updatedturns
    })
  }

  function handleRestart() {
    setgameturns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
              <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
            <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameturns} />
      </main>
  )
}