import 'babel-polyfill';
//Style
import './style.css';
//React
import React from 'react';
import { render } from 'react-dom';

if (module.hot) {
    module.hot.accept();
}
render(
    <h1>
        ciao ciao ci
    </h1>,
    document.getElementById('root')
);




