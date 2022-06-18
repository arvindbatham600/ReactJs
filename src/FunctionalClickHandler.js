import React from "react";

function FunctionalClickHandler() {

    function clickHandler(){
        console.log("Button Clicked")
    }

  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default FunctionalClickHandler;
