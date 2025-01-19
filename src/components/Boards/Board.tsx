import { Button } from "flowbite-react";
import Square from "../Squares/Square";

type BoardProps = {
    squares: TSquare[];
    squareClick: (index: number) => void;
    winner: string;
    reset: () => void;
    player: string;
}

export type TSquare = "X" | "O" | null

const Board = (props:BoardProps) => {
    return (
        <>
            
            {props.winner && (
                <div className="flex justify-center">
                <h3 className="flex justify-center mb-2">
                    {props.winner === "draw" ? "C'est un match nul" : `Joueur ${props.winner} à gagné!`}
                </h3>
                </div>
            )}
            <div className="flex justify-center">
                <Button onClick={props.reset} type="submit" className="bg-pale-grey shadow-lg shadow-pale-grey-500/50 hover:bg-medium-grey mb-4">Reset</Button>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 relative gap-4 max-w-xl mx-auto mb-4">
                {props.squares.map((square, index) => (
                    <Square square={square} onClick={() => props.squareClick(index)} />
                ))}
            </div>
        </>
    );
};
export default Board;
