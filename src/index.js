import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons'; 

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';

import './index.css';

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<App />); //REACT 18
// registerServiceWorker();
