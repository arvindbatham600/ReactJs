import React, { Component } from "react";

class ClassClickHandler extends Component {
  clickHandler() {
    console.log("Now Button Clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Now Click Me</button>
      </div>
    );
  }
}

export default ClassClickHandler;
