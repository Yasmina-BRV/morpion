import { useEffect, useState } from "react";
import Board, { TSquare } from "../components/Boards/Board"

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState("");

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

    const checkWinner = (squares:TSquare[]) => {
        const combos = [
            [0, 1, 2], //1ère ligne
            [3, 4, 5], //2ème ligne 
            [6, 7, 8], //3ème ligne
            [0, 3, 6], //diagonale de la gauche vers le bas
            [1, 4, 7], //diagonale de la droite vers le bas
            [2, 5, 8], //1ère colonne
            [0, 4, 8], //2ème colonne
            [2, 4, 6], //3ème colonne
        ];

        for(let i = 0; i < combos.length; i++) {
            const [a, b, c] = combos[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a] === "X") {
                    setWinner("X");
                } else {
                    setWinner("O");
                }
                return;
            }
        }
        const isDraw = squares.every((squares) => squares !== null);
        setWinner(isDraw ? "draw" : null);
    };

    useEffect(() => {
        checkWinner(squares);
    }, [squares]);
    
    const handleReset = () => {
        if (!winner && winner !== "draw") return;
        setSquares(Array(9).fill(null));
        setPlayer("X");
        setWinner("");
    };

    return (
        <>
            <h1 className="my-4 flex justify-center text-2xl font-bold">Morpion</h1>

            <div className="flex flex-row justify-center gap-4 my-4">
                <div className="bg-pale-grey size-16 rounded text-center">Joueur 1 X</div>
                <div className="bg-pale-grey size-16 rounded text-center">Match nul</div>
                <div className="bg-pale-grey size-16 rounded text-center">Joueur 2 O</div>
            </div>


            <Board squares={squares} squareClick={handleSquareClick} player={player} winner={winner} reset={handleReset} />
        </>
    )
    
}

export default Game