import { SET_CHAT_BOX_VISIBILITY, SET_LOGIN } from '../constants/ActionTypes';

const initialState = {
    isChatBoxOpen: false,
    isLogged: false
}

export const chatBox = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAT_BOX_VISIBILITY:
            return {
                ...state,
                isChatBoxOpen: !state.isChatBoxOpen
            };
        case SET_LOGIN:
            return {
                ...state,
                isLogged: true
            }
        default: 
            return state;
    }
}