import squareStyle from './Board.module.css'
import {useState} from "react";

type Square = { id: number; step: number | undefined, player: Player | undefined }
type Player = 'X' | 'O'

function Board() {
    const squareNumber: number = 9;
    const squares: Square[] = []
    for (let i:number = 0; i < squareNumber; i++) {
        squares.push(
            {
                id: i,
                player: undefined,
                step: undefined
            }
        )
    }

    const [board, setBoard] = useState<{ currentPlayer: Player, square: { [id: number]: Square }}>({
        currentPlayer: 'X',
        square: []
    })

    const onClickSquare = (square: Square) => {
        if (getSquarePlayer(square.id)) return
        if (getWinner()) return;

        setBoard({
            currentPlayer: board.currentPlayer === 'X' ? 'O' : 'X',
            square: {
                ...board.square,
                [square.id]: { player: board.currentPlayer, step: Object.values(board.square).length + 1, id: square.id }
            }
        })
    }

    const getSquarePlayer = (id: number) => {
        return board.square[id]?.player || ''
    }

    const getPartyStatus = () => {
        const winner = getWinner()
        if (winner) return `The winner is : ${winner}`
        return `Next player : ${board.currentPlayer}`
    }

    const getWinner: () => ("X" | "O" | undefined | null) = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board.square[a]?.player === board.square[b]?.player && board.square[a]?.player === board.square[c]?.player) {
                return board.square[a]?.player
            }
        }
        return null;
    }

    return (
        <>
            <div>{ getPartyStatus() }</div>
            <div className={ squareStyle.gameBoard }>
                { squares.map(s => (
                    <div key={s.id} className={ squareStyle.box } onClick={ () => onClickSquare(s) }>{ getSquarePlayer(s.id) }</div>
                )) }
            </div>
        </>
    )
}

export default Board;