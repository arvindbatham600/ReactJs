import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      Message: "Yes, You Are A Fool `🤪`",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Action
        </button>
      </div>
    );
  }
}

export default Message;
