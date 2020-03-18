import { DEFAULT_ROW, DEFAULT_COL, DEFAULT_PIECE, DEFAULT_DELAY } from '../config';

export const init = (current, setCurrent) => {
    if (current === undefined) {
        const index = Math.floor(Math.random() * Math.floor(7));

        setCurrent({
            kind: index,
            piece: DEFAULT_PIECE[index]
        });
    }
};

export const run = (board, setBoard, current, setCurrent) => {
    if (current !== undefined) {
        setTimeout(() => {
            let update = {
                kind: current.kind,
                piece: []
            };

            for (const index in current.piece) {
                if (
                    Math.floor(current.piece[index] / DEFAULT_COL) === DEFAULT_ROW + 4 - 1 ||
                    board[current.piece[index] + 10].status === 1
                ) {
                    fix(board, setBoard, current, setCurrent);
                    break;
                }
                update.piece.push(current.piece[index] + 10);
            }

            setCurrent(update);
        }, DEFAULT_DELAY);
    }
};

export const key = (keyCode, board, setBoard, current, setCurrent) => {
    if (keyCode === 37 || keyCode === 39 || keyCode === 40) {
        let update = {
            kind: current.kind,
            piece: []
        };

        if (keyCode === 37) {
            for (const index in current.piece) {
                if (
                    current.piece[index] % DEFAULT_COL === 0 ||
                    board[current.piece[index] - 1].status === 1
                )
                    return;
                update.piece.push(current.piece[index] - 1);
            }
        } else if (keyCode === 39) {
            for (const index in current.piece) {
                if (
                    current.piece[index] % DEFAULT_COL === DEFAULT_COL - 1 ||
                    board[current.piece[index] + 1].status === 1
                )
                    return;
                update.piece.push(current.piece[index] + 1);
            }
        } else if (keyCode === 40) {
            for (const index in current.piece) {
                if (
                    Math.floor(current.piece[index] / DEFAULT_COL) === DEFAULT_ROW + 4 - 1 ||
                    board[current.piece[index] + 10].status === 1
                ) {
                    fix(board, setBoard, current, setCurrent);
                    break;
                }
                update.piece.push(current.piece[index] + 10);
            }
        }

        setCurrent(update);
    } else if (keyCode === 32) {
        while (true) {
            for (const index in current.piece) {
                if (
                    Math.floor(current.piece[index] / DEFAULT_COL) === DEFAULT_ROW + 4 - 1 ||
                    board[current.piece[index] + 10].status === 1
                ) {
                    fix(board, setBoard, current, setCurrent);
                    return;
                }
            }
            for (const index in current.piece) current.piece[index] = current.piece[index] + 10;
        }
    }
};

export const fix = (board, setBoard, current, setCurrent) => {
    let refresh = board;

    for (const index in current.piece) {
        refresh[current.piece[index]].kind = current.kind;
        refresh[current.piece[index]].status = 1;
    }

    setBoard(refresh);
    setCurrent(undefined);
};
