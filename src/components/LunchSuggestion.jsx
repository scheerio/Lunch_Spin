import React, { useState } from "react";

//This functional component holds the lunch spinner and suggestion form
const LunchSuggestion = (props) => {
  //Used to get and set random suggestion to display
  const [randomSuggestion, setRandomSuggestion] = useState("");
  //Used to hold status of if result should show or not
  const [showResult, setShowResult] = useState(false);

  //Get random suggestion to display
  const getSuggestion = () => {
    const suggestions = props.suggestions;
    setRandomSuggestion(
      suggestions[Math.floor(Math.random() * suggestions.length)]
    );
    setShowResult(true);
  };

  return (
    <div className="page">
      <h1>Lunch Spinner!</h1>
      <p>
        <b>Lunch made simple</b>.
        <br />
        Press <i>Get Suggestion</i> to get a lunch spot suggestion.
        <br />
        Suggest a new lunch spot using the form below.
      </p>
      {/* Contains all content for the suggestion spinner section */}
      <div className="spinSection">
        <button className="suggestionButton" onClick={getSuggestion}>
          Get Suggestion
        </button>
        {showResult ? (
          <div className="lunchResult">
            <br />
            <b>Here's your lunch spot: </b>
            <div className="suggestion">
              <p>
                <b>Name:</b> {randomSuggestion.lunchSpotName}
              </p>
              <p>
                <b>Address: </b>
                {randomSuggestion.address}
              </p>
              <b>Website: </b>
              <a href={randomSuggestion.link} target="_blank" rel="noreferrer">
                {randomSuggestion.link}
              </a>
              <p>
                <b>Notes: </b>
                {randomSuggestion.notes}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LunchSuggestion;
