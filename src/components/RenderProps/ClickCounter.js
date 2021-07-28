import React, { Component } from 'react';

class ClickCounter1 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        {this.props.name}
        <button onClick={incrementCount}>
          Clicked {count} times
          {/* , Type :{this.props.type} */}
        </button>
      </div>
    );
  }
}
export default ClickCounter1;
