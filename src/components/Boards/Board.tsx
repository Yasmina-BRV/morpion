import Square from "../Squares/Square";

type BoardProps = {
    squares: TSquare[];
    squareClick: (index: number) => void;
}

export type TSquare = "X" | "O" | null

const Board = (props:BoardProps) => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 relative gap-4 max-w-xl mx-auto">
            {props.squares.map((square, index) => (
                <Square square={square} onClick={() => props.squareClick(index)} />
            ))}
        </div>
    );
};
export default Board;
