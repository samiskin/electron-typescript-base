import { IState, IAction } from 'lib/store';
import { INC_COUNTER } from 'actions/app-actions';
import * as _ from 'lodash';
let { createSelector } = require('reselect');

export interface IAppState {
  counter: number;
};
type S = IAppState;

const app = (state: IState) => state.app;

export const getCounter = createSelector(
  app,
  (app: S) => app.counter
);

export function appReducer(
  state:S = {counter: 42},
  action?: IAction
): S {
    switch(action.type) {
      case INC_COUNTER:
        return _.assign<any, S>({}, state, {counter: state.counter + 1});
      default:
        return state;
    }
}
