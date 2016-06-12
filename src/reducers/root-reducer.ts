import { combineReducers } from 'redux'
import { appReducer, IAppState } from 'reducers/app-reducer';

let rootReducer = combineReducers({
  app: appReducer,
});

export interface IState {
  app: IAppState
}

export default rootReducer;
