import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/layout/layout';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/'

const store = createStore(
    reducer,
    //this gives plugin access to the store for dev purposes
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

