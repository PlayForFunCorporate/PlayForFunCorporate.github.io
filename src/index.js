import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import '../src/script/scripts'



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('root'));