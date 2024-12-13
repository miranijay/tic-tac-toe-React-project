import { useState } from "react"

const initialboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function board() {

    const [Gameboard, setGameboard] = useState(initialboard)

    function box(rowindex, colindex) {
        setGameboard((prevboard) => {
            const updateboard = [...prevboard.map(innerArray => [...innerArray])]
            updateboard[rowindex][colindex] =  "X"

            return updateboard
        })
    }

    return(

        <ol id="game-board">
            {
                initialboard.map((row, rowindex) => 
                    <li key={rowindex}>
                        <ol>
                            {row.map((playerSymbol, colindex) => 
                                <li key={colindex}>
                                    <button onClick={() => box(rowindex, colindex)}>{playerSymbol}</button>
                                </li>
                            )}
                        </ol>
                    </li>
                )
            }
        </ol>
    )
}