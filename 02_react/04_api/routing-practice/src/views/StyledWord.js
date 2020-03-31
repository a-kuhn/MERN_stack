import React from "react";

const StyledWord = ({ value, bgColor, color }) => {
  if (isNaN(value)) {
    return (
      <h1
        style={{
          display: "block",
          backgroundColor: bgColor,
          color: color
        }}
      >
        The word is: {value}
      </h1>
    );
  } else {
    return (
      <h1
        style={{
          display: "block",
          backgroundColor: bgColor,
          color: color
        }}
      >
        The number is: {value}
      </h1>
    );
  }
};

export default StyledWord;
