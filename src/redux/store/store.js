import { createStore, combineReducers} from 'redux';

import { visibilityFilter, user, messages } from '../reducers';

const store = createStore(
    combineReducers({
        visibilityFilter,
        user,
        messages
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;