import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';

const Room = ({ data }) => {
    return (
        <Link to={`/${data.id}`} className='room'>
            <div>Playroom</div>
        </Link>
    );
};

export default Room;
