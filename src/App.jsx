import Player from "./compnents/player.jsx"
import Gameboard from "./compnents/gameboard.jsx"

function App() {
  

  return (
    
      <main>
        <div id="game-container">
          <ol id="players">
              <Player name="Player 1" symbol="X" />
              <Player name="Player 2" symbol="O" />
          </ol>
          <Gameboard />
        </div>
      </main>
  )
}

export default App
