import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import RoomInfo from '../RoomInfo';

import { getRoomList } from '../../data';

import './index.css';

const Lobby = () => {
    const [roomList, setRoomList] = useState([]);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        getRoomList(auth.token, result => {
            setRoomList(result);
        });
    }, [auth.token]);

    return (
        <div className='lobby'>
            <div className='lobby-title'>SELECT THE GAME ROOM</div>
            <div className='lobby-new'>MAKE A NEW GAME</div>
            <div className='lobby-container'>
                {roomList.map((room, index) => (
                    <RoomInfo data={room} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Lobby;
