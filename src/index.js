import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import Main from './Main/Main.js';
import Auth from './Auth/Auth.js';
import ProxyRedirect from './ProxyRedirect/ProxyRedirect.js';

const history = createBrowserHistory()

ReactDOM.render(
    <BrowserRouter>
        <Router history={history}>
            <div>
                <Route exact path='/' component={Main} />
                <Route exact path='/auth/' component={Auth} />
                <Route exact path='/proxy-redirect/' component={ProxyRedirect} />
            </div>
        </Router>
    </BrowserRouter>, 
    document.getElementById('root')
);
