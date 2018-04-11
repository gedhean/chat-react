import * as types from '../constants/ActionTypes';

export const toggleChatBox = () => ({
    type: types.SET_CHAT_BOX_VISIBILITY
});

export const setLogin = () => ({
    type: types.SET_LOGIN
})