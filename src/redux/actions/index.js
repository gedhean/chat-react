import * as types from '../constants/ActionTypes';
import { Socket } from 'dgram';

export const toggleChatBox = () => ({
    type: types.TOGGLE_CHAT_BOX_VISIBILITY
});

export const login = isLogged => ({
    type: types.LOGIN
});

export const addMessage = (msgId, content, createAt, from) => ({
    type: types.ADD_MESSAGE,
    msgId: {
        msgId,
        content,
        createAt,
        from
    }
});

export const setSocket = socket => ({
    type: types.SET_SOCKET,
    socket
})