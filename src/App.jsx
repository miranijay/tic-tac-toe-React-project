import Player from "./compnents/player.jsx"
import Gameboard from "./compnents/gameboard.jsx"
import { useState } from "react";
import Log from "./compnents/log.jsx";

function App() {

  const [gameturns, setgameturns] = useState([])
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowindex, colindex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setgameturns((prevturns) => {

      let currentPlayer = 'X';

      if (prevturns.length > 0 && prevturns[0].player === 'X') {
        currentPlayer = 'O';
      }
      
      const updatedturns = [ {square: {row: rowindex, col: colindex}, player: currentPlayer}, ...prevturns, ]
      return updatedturns
    })
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
              <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
          <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
        <Log />
      </main>
  )
}

export default App
