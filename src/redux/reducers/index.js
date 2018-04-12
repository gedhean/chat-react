import * as types from '../constants/ActionTypes';

const initialState = {
    isChatBoxOpen: false
}

export const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_CHAT_BOX_VISIBILITY:
            return {
                ...state,
                isChatBoxOpen: !state.isChatBoxOpen
            };

        default: 
            return state;
    }
}

export const user = (state = {isLogged: false}, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isLogged: action.isLogged
            };
    
        default:
            return state;
    }
}

export const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return [...state, action.message];
    
        default:
            return state;
    }
}