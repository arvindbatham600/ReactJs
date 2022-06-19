import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1>Hello I am {person.name} and I am {person.age} year old and I know {person.skill}</h1>
    </div>
  );
}

export default Person;
