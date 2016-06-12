import * as React from 'react';
import Store from 'lib/store';

export default class ReduxComponent<S> {
  state: S | {};

  constructor() {
    this.state = this.getState(Store.getState());
    Store.subscribe(() => {
      let prevState = this.state;
      this.state = this.getState(Store.getState());
      this.update(prevState);
    });
  }

  protected getState(store: S): S | {} {
      return {};
  }

  protected update(prevState: any) {
  }

}
