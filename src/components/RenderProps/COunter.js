import React, { Component } from 'react';

export class COunter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(
      (prevState) => {
        return { count: prevState.count + 1 };
      },
      () => {
        console.log('Callback Value:', this.state.count);
      }
    );
    console.log(this.state.count);
  };
  render() {
    return (
      //   <div>{this.props.render(this.state.count, this.incrementCount)}</div>
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default COunter;
