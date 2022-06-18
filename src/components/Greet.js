import React from "react";

// function Greet() {
//   return <h1>Hello World</h1>;
// }

const Greet = ({name, children}) => {
  // const { name, children } = props;
  return (
    <div>
      <h1>Hello {name} </h1>
      {children}
    </div>
  );
};

export default Greet;
