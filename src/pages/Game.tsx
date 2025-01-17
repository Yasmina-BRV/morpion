import { useState } from "react";
import Board from "../components/Boards/Board"

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const [player, setPlayer] = useState("X");

    const handleSquareClick = (index: number) => {
        // Return if square already contents a value
        if (squares[index] !== null) return;
        // Create a new array to add each square index 
        const newSquares = [...squares];
        newSquares[index] = player;
        // set square array to the new Array
        setSquares(newSquares);
        // switch between X and O based on player turn
        setPlayer(player === "X" ? "O" : "X");
    };

    return (
        <>
            <h1 className="my-4 flex justify-center text-2xl font-bold">Morpion</h1>

            <div className="flex flex-row justify-center gap-4 my-4">
                <div className="bg-pale-grey size-16 rounded text-center">Joueur 1</div>
                <div className="bg-pale-grey size-16 rounded text-center">Match nul</div>
                <div className="bg-pale-grey size-16 rounded text-center">Joueur 2</div>
            </div>

            <Board squares={squares} squareClick={handleSquareClick} />
        </>
    )
    
}

export default Game