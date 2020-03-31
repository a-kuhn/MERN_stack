import React from "react";

const Value = ({ value }) => {
  if (isNaN(value)) {
    return <h1>The word is: {value}</h1>;
  } else {
    return <h1>The number is: {value}</h1>;
  }
};

export default Value;
