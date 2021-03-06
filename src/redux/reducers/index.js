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

export const user = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLogged: true
      };

    default:
      return state;
  }
}

export const messages = (state = { }, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return {...state, 
        [action.msgId.msgId] : action.msgId
      };

    default:
      return state;
  }
}

export const socketIO = (state = null, action) => {
  switch (action.type) {
    case types.SET_SOCKET:
      return {
        socket: action.socket
      };
  
    default:
      return state;
  }
}