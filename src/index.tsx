import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/GlobalStyle';
import {ResetCSS} from './styles/reset.css';

ReactDOM.render(
    <React.StrictMode>
        <ResetCSS/>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
