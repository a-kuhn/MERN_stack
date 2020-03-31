import React from "react";
import "./App.css";

import PersonCard from "./components/PersonCard";
import BdayButton from "./components/BdayButton";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age="45" hairColor="Black" />
      <BdayButton
        firstName="Jane"
        lastName="Doe"
        btnText={"Birthday Button for "}
      />

      <PersonCard
        firstName="John"
        lastName="Smith"
        age="88"
        hairColor="Brown"
      />
      <BdayButton
        firstName="John"
        lastName="Smith"
        btnText={"Birthday Button for "}
      />

      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age="50"
        hairColor="Brown"
      />
      <BdayButton
        firstName="Millard"
        lastName="Fillmore"
        btnText={"Birthday Button for "}
      />

      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age="62"
        hairColor="Brown"
      />
      <BdayButton
        firstName="Maria"
        lastName="Smith"
        btnText={"Birthday Button for "}
      />
    </div>
  );
}

export default App;
