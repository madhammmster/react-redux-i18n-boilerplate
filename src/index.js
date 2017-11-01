//Core modules
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import RootReducer from './reducers/index'
import Root from './Root'

let store = createStore(RootReducer)

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);