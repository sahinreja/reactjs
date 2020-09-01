import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
   <BrowserRouter>
       <App />
   </BrowserRouter>
    ,
    document.getElementById("root")
)