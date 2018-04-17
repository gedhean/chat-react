import { createStore, combineReducers} from 'redux';

import { visibilityFilter, user, messages, socketIO } from '../reducers';

const store = createStore(
    combineReducers({
        visibilityFilter,
        user,
        messages,
        socketIO
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;