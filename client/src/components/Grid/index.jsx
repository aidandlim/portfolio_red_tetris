import React from 'react';

import './index.css';

const Grid = ({ grid, current, index }) => {
    let className = 'grid grid-default';

    if (current !== undefined && current.piece.findIndex(p => p === index) !== -1) {
        if (current.kind === 0) className = 'grid grid-red';
        if (current.kind === 1) className = 'grid grid-orange';
        if (current.kind === 2) className = 'grid grid-yellow';
        if (current.kind === 3) className = 'grid grid-green';
        if (current.kind === 4) className = 'grid grid-blue';
        if (current.kind === 5) className = 'grid grid-navy';
        if (current.kind === 6) className = 'grid grid-purple';
    }

    if (grid.status === 1) {
        if (grid.kind === 0) className = 'grid grid-red';
        if (grid.kind === 1) className = 'grid grid-orange';
        if (grid.kind === 2) className = 'grid grid-yellow';
        if (grid.kind === 3) className = 'grid grid-green';
        if (grid.kind === 4) className = 'grid grid-blue';
        if (grid.kind === 5) className = 'grid grid-navy';
        if (grid.kind === 6) className = 'grid grid-purple';
    }

    return <div className={className}></div>;
};

export default Grid;
