export const DEFAULT_ROW = 20;
export const DEFAULT_COL = 10;
export const DEFAULT_DELAY = 250;

export const DEFAULT_PIECE = [
    [4, 14, 24, 34],
    [24, 25, 34, 35],
    [24, 33, 34, 35],
    [23, 33, 34, 35],
    [25, 33, 34, 35],
    [23, 24, 34, 35],
    [24, 25, 33, 34]
];

export const DEFAULT_BOARD = (ROW, COL) => {
    let board = [];

    for (let i = 0; i < ROW + 4; i++) {
        for (let j = 0; j < COL; j++) {
            board.push({
                x: j,
                y: i,
                status: 0,
                kind: -1
            });
        }
    }

    return board;
};
