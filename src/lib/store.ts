import { compose, createStore, applyMiddleware } from 'redux';
import * as React from 'react';
import WindowSettings from 'renderer/window-settings';
import { combineReducers } from 'redux';
import { default as rootReducer, IState } from 'reducers/root-reducer';

let { electronEnhancer } = require('redux-electron-store');
let createLogger = require('redux-logger');

let logger = createLogger({
  level: 'info',
  duration: true
});

let enhancer = compose(
  applyMiddleware(logger),
  electronEnhancer({ sourceName: WindowSettings.route ? WindowSettings.route.substring(1) : undefined })
);

if (process.type === 'renderer') {
  enhancer = compose(
    enhancer,
    require('renderer/dev-tools').default.instrument()
  );
}
let store = enhancer(createStore)(rootReducer);

 // Hot Reloading
interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
};
declare const module: IHotModule;

if (module.hot) {
  module.hot.accept('../reducers/root-reducer', () => {
    store.replaceReducer(require('reducers/root-reducer'));
  });
}

// Exports
export default store;
let dispatch = store.dispatch;
export { dispatch, IState };

export interface IAction {
  type: string,
  data?: any,
  source?: string
}
