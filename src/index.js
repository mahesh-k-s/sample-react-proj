import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore();

ReactDOM.render(
    <Provider store="store">
        <div>Project Started</div>
    </Provider>, document.getElementById("app"))