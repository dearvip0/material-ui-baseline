import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Route, Switch, Router, Redirect } from 'react-router';
import Album from './pages/Album/Album';
import Blog from './pages/Blog/Blog';

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={App}>
      </Route>
      <Route path="/page/Album" component={Album}></Route>
      <Route path="/page/Blog" component={Blog} ></Route>
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
