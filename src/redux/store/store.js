import { createStore, combineReducers} from 'redux';

import { chatBox } from '../reducers';

const store = createStore(
    chatBox,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;