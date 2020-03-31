import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, age, hairColor, interests }) => {
  const [ageState, setAgeState] = useState(age);

  const handleBirthdayClick = e => {
    setAgeState(ageState + 1);
  };

  return (
    <>
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {ageState}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleBirthdayClick}>
        Birthday Button for {firstName} {lastName}
      </button>
      <div>
        <p>Hobbies: </p>
        {interests.map((interest, idx) => {
          return <p key={idx}>{interest}</p>;
        })}
      </div>
    </>
  );
};

export default PersonCard;
