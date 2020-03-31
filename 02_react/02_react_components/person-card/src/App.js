import React from "react";
import "./App.css";

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Jane"
        lastName="Doe"
        age={45}
        hairColor="Black"
        interests={["running", "knitting"]}
      />
      <PersonCard
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"
        interests={["reading", "spiders"]}
      />
      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"
        interests={["money", "fine leather goods"]}
      />
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={63}
        hairColor="Brown"
        interests={["base jumping", "frogs", "painting"]}
      />
    </div>
  );
}

export default App;
