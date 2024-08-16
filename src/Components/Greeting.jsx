import React from "react";

export const Greeting = (props) => {
  const { name } = props;
  return <div>Hi {name}</div>;
};
