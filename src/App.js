import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstname="Jane" lastname="Doe" hairColor="Black" age={45} />

      <PersonCard
        firstname="John"
        lastname="Smith"
        hairColor="Brown"
        age={88}
      />
    </div>
  );
}

export default App;
