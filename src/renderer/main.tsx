import * as React from 'react';
import AppActions from 'actions/app-actions';
import { getCounter } from 'reducers/app-reducer';
import { dispatch } from 'lib/store';
import { connect } from 'react-redux';

interface P{
  counter: number;
}
export class Main extends React.Component<P, {}> {

  handleClick(e: React.MouseEvent) {
    dispatch(AppActions.incCounter());
  }

  render() {
    return (
      <div>
        Hello World {this.props.counter}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default connect((state) => ({
  counter: getCounter(state)
}))(Main);
