import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';//typescriptでエラーが出てしまった、＠typesreact-reduxを使うこと
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import App from './App';

const store = createStore(applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={store}>
<App />
    </Provider>,
document.getElementById('root')
);
