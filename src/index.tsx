import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';//typescript => 型の宣言ファイルがないとうまく動かない　宣言用のファイルを追加（〜d.tsx)
//import logger from 'redux-logger';


import App from './App';

const store = createStore(applyMiddleware());


ReactDOM.render(
    <Provider store={store}>
<App />
    </Provider>,
document.getElementById('root')
);
