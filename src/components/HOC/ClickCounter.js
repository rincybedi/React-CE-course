import React, { Component } from 'react';
import WithCounter from './WithCounter';

class ClickCounter extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        {this.props.name}
        <button onClick={this.props.incrementCount}>
          Clicked {count} times, Type :{this.props.type}
        </button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter, 5);
