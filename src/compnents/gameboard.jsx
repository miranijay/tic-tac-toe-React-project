import { useState } from "react"

const initialboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function board({onSelectSquare, activePlayerSymbol }) {

    // const [Gameboard, setGameboard] = useState(initialboard)

    // function box(rowindex, colindex) {
    //     setGameboard((prevboard) => {
    //         const updatedboard = [...prevboard.map(innerArray => [...innerArray])];
    //         updatedboard[rowindex][colindex] = activePlayerSymbol;

    //         return updatedboard
    //     })
    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {
                Gameboard.map((row, rowindex) => 
                    <li key={rowindex}>
                        <ol>
                            {row.map((playerSymbol, colindex) => 
                                <li key={colindex}>
                                    <button onClick={() => onSelectSquare(rowindex, colindex)}>{playerSymbol}</button>
                                </li>
                            )}
                        </ol>
                    </li>
                )
            }
        </ol>
    )
}