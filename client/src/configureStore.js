import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduce from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middlewares = [
    thunk
];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configureStore() {
    const store = createStore(reduce, enhancer);
    return store;
}