import React, { useState } from "react";
import LunchSuggestion from "./components/LunchSuggestion";
import LunchForm from "./components/LunchForm";
import Footer from "./components/Footer";

//App component used to display app
const App = () => {
  //Just some dummy input here! Pretend it's fetched data
  let input1 = [
    {
      lunchSpotName: "McDonald's",
      address: "1717 Broad St.",
      link: "https://www.mcdonalds.com/us/en-us.html",
      notes: "Great for fast service, and great fries!"
    },
    {
      lunchSpotName: "Chipotle",
      address: "4040 N. St.",
      link: "https://chipotle.com/",
      notes: "Love the guac here."
    },
    {
      lunchSpotName: "Sweetgreen",
      address: "5000 South Block",
      link: "https://www.sweetgreen.com/",
      notes: "Definitely a healthy option."
    }
  ];

  //Holds current list of suggestions
  let [suggestions, setSuggestions] = useState(input1);

  //Handles updating suggestions list when form submits
  const updateSuggestions = (suggestion) => {
    setSuggestions((prev) => {
      return [suggestion, ...prev];
    });
  };

  return (
    <div className="App">
      <LunchSuggestion suggestions={suggestions} />
      <LunchForm
        suggestions={suggestions}
        updateSuggestions={updateSuggestions}
      />
      <Footer />
    </div>
  );
};

export default App;
