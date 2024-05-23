import React from "react";
import axios from "axios";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data.js";
import Test from "./Test.jsx";
import AddTravelForm from "./components/AddTravelForm.jsx";

const createCard = (card) => {
  return (
    <Card
      key={card.id}
      name={card.name}
      src={card.src}
      alt={card.alt}
      tel={card.tel}
      email={card.email}
    />
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <AddTravelForm />
      
    <div className="App">
    <Test />
    </div>
    </div>

  );
}

export default App;
