import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import routes from './config/routes'

ReactDom.render(
    routes, document.getElementById('app')
);