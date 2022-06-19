import React, { Component } from "react";

class Conditional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Method - 4 for only returning the true value

    return this.state.isLoggedIn && <div>Hello Arvind</div>;

    // Method -3 this is most useful because we can use this in JSX
    // return this.state.isLoggedIn ? <div>Hello Arvind</div> : <div>Hello Guest</div>;

    // Method -2
    // let Message;
    // if (this.state.isLoggedIn) {
    //   Message = "hello Arvind";
    // } else {
    //   Message = "hello Guest";
    // }

    // return <div>{Message}</div>;

    // Method -1
    // if (this.state.isLoggedIn) {
    //   return <div>hello Arvind </div>;
    // } else {
    //   return <div>hello Guest</div>;
    // }
  }
}

export default Conditional;
