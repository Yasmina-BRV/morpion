import type { TSquare } from "../Boards/Board";

type SquareProps = {
    square: TSquare;
    onClick: (event: React.MouseEvent) => void;
}

const Square = (props: SquareProps) => {
    return (
        <div onClick={props.onClick} className="aspect-square w-full bg-slate-300 rounded-md flex items-center justify-center">
            {props.square}
        </div>
    );
};
export default Square;