import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Child Component')}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
