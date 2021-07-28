import React, { Component } from 'react';
import WithCounter from './WithCounter';

class HoverCounter extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        {this.props.name}

        <h2 onMouseOver={this.props.incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default WithCounter(HoverCounter, 10);
