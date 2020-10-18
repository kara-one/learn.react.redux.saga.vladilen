import * as serviceWorker from './serviceWorker';

import { applyMiddleware, compose, createStore } from 'redux';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { forbiddenWordsMiddleware } from './redux/middleware';
import { render } from 'react-dom';
import { rootReducer } from './redux/rootReducer';
import { sagaWatcher } from './redux/sagas';
import thunk from 'redux-thunk';

const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
