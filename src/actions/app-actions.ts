import Store from 'lib/store';
import { IAction } from 'lib/store';

export const INC_COUNTER = "IncCounter";

class AppActions {
  incCounter(): IAction {
    return {type: INC_COUNTER};
  }
}

export default new AppActions();
