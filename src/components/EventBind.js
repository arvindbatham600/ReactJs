import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Hello Visitor",
    };

    // this.eventHandler = this.eventHandler.bind(this)
  }

  //   eventHandler() {
  //     this.setState({
  //       Message: "Bye Visitor",
  //     });
  //   }

  eventHandler = () => {
    this.setState({
      Message: "GoodBye Visitor",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        {/* <button onClick={this.eventHandler.bind(this)}>Click Me</button> */}
        {/* <button onClick={() => this.eventHandler()}>Click Me</button> */}
        {/* <button onClick={this.eventHandler}>Click Me</button> */}
        <button onClick={this.eventHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
