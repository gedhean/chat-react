import { SET_CHAT_BOX_VISIBILITY } from '../constants/ActionTypes';

const initialState = {
    isChatBoxOpen: false
}

export const chatBox = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAT_BOX_VISIBILITY:
            return {
                ...state,
                isChatBoxOpen: !state.isChatBoxOpen
            };
        default: 
            return state;
    }
}