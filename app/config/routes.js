import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import Container from '../components/Container';

var routes = (
    <Router history={ hashHistory }>
        <Route path="/" component={ Container }></Route>
    </Router>
);

export default routes;