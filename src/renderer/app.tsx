import * as React from 'react';
import DevTools from 'renderer/dev-tools';
import Store from 'lib/store';
import { Provider } from 'react-redux';

export default class App extends React.Component<{}, {}> {
    render() {
      return <Provider store={Store}>
        <div>
          {this.props.children}
          <DevTools />
        </div>
      </Provider>;
    }
}
