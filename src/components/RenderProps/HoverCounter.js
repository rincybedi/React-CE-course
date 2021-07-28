import React, { Component } from 'react';

class HoverCounter1 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        {/* {this.props.name} */}

        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default HoverCounter1;
