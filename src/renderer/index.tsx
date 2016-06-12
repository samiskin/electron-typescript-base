import * as React from 'react';
import { render } from 'react-dom';
import WindowSettings from 'renderer/window-settings';
import { Router, Route, IndexRoute, createMemoryHistory } from 'react-router';
import App from 'renderer/app';
import Main from 'renderer/main';

declare const require: (name: String) => any;
interface IHotModule {
  hot?: { accept: (path?: string, callback?: () => void) => void };
};
declare const module: IHotModule;

if (module.hot) {
  module.hot.accept();
}

let history = createMemoryHistory();
let RootRouter = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="/main" component={Main}/>
    </Route>
  </Router>
);

render(RootRouter, document.getElementById('root'));

if (WindowSettings.route) {
  history.push(WindowSettings.route);
}
