import React from "react";

// eslint-disable-next-line react/prop-types
export const Person = ({ resource }) => {
  // eslint-disable-next-line react/prop-types
  const person = resource.person.read();

  return <div>{person.name.first}</div>;
};