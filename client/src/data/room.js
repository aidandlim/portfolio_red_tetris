import { roomList } from './dummy-data';

export const getRoomList = (token, cb) => {
    cb(roomList);
}