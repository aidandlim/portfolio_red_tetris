import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';

const RoomInfo = ({ data }) => {
    return (
        <Link to={`/${data.id}`} className='room'>
            <div>Playroom</div>
        </Link>
    );
};

export default RoomInfo;
