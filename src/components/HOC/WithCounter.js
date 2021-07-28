import React from 'react';

const WithCounter = (WrappedComponent, incrementBy) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementBy };
      });
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          incrementCount={this.incrementCount}
          count={count}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }

  return NewComponent;
};

export default WithCounter;
