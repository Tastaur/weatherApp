import {applyMiddleware, combineReducers, compose, createStore} from 'redux'

import thunkMiddleware from 'redux-thunk'
import weatherReducer from './weatherReducer'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    weather:weatherReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
window.store = store

export default store
