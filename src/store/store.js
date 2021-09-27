import { createStore, combineReducers } from 'redux'
import { formReducer } from '../reducers/formReducer';

const reducers = combineReducers({
    form: formReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
