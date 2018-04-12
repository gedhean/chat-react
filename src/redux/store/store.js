import { createStore, combineReducers} from 'redux';

import { visibilityFilter, user } from '../reducers';

const store = createStore(
    combineReducers({
        visibilityFilter,
        user
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;