import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      Count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     Count: this.state.Count + 1,
    //   },
    //   () => {
    //     console.log(this.state.Count);
    //   }
    // );

    this.setState((prevState) => ({
      Count: prevState.Count + 1,
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.Count}</h1>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
