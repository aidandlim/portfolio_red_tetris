import React, { useState, useEffect } from 'react';

import { DEFAULT_BOARD, DEFAULT_ROW, DEFAULT_COL, DEFAULT_DELAY } from '../../config';
import { init, run, key } from '../../function';

import Grid from '../Grid';

import './index.css';

const Board = () => {
    const [board, setBoard] = useState(DEFAULT_BOARD(DEFAULT_ROW, DEFAULT_COL));
    const [current, setCurrent] = useState(undefined);

    useEffect(() => {
        document.addEventListener('keydown', _handleKey, false);

        init(current, setCurrent);

        return () => {
            document.removeEventListener('keydown', _handleKey, false);
            clearTimeout(timeout);
        };
    }, [board, current]);

    const _handleKey = e => {
        key(e.keyCode, board, setBoard, current, setCurrent);
    };

    return (
        <div className='board'>
            {board.map((grid, index) => (
                <Grid grid={grid} current={current} index={index} key={index} />
            ))}
        </div>
    );
};

export default Board;
