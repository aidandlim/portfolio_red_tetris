import React from 'react';

import { Link } from 'react-router-dom';

import Board from '../Board';

import FeatherIcon from 'feather-icons-react';

import './index.css';

const Playroom = () => {
    return (
        <div className='playroom'>
            <Link to='/'>
                <FeatherIcon
                    className='playroom-back'
                    icon='arrow-left'
                    color='#AAAAAA'
                    size='3rem'
                />
            </Link>
            <div className='playroom-board'>
                <Board />
            </div>
        </div>
    );
};

export default Playroom;
