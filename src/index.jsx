import './index.css';
import React from 'react';
import {render} from 'react-dom';
import App from "./Home/App.jsx";
import {Provider} from 'react-redux';
import {store} from './reducers'
import {BrowserRouter } from 'react-router-dom';

render (
    <>
    <BrowserRouter>
    <Provider store = {store}>
        <App/>
    </Provider>
    </BrowserRouter>
    </>
    ,
    document.querySelector(".root")
);