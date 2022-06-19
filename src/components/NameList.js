import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "arivnd",
      age: 20,
      skill: "React",
    },
    {
      id: 2,
      name: "Alex",
      age: 20,
      skill: "vido-editing",
    },
    {
      id: 3,
      name: "Aurobindo",
      age: 20,
      skill: "College",
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default NameList;
