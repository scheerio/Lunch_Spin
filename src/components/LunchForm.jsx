import React, { useState } from "react";

//This is the form for submitting new suggestions
const LunchForm = (props) => {
  console.log(props);
  //Used to determine status of success message showing or not
  const [show, setShow] = useState(false);
  //Handles addition of new suggestions once form submitted
  const handleAdd = (e) => {
    e.preventDefault();
    //Create new suggestion using values
    const newSuggestion = {
      lunchSpotName: e.target.name.value,
      address: e.target.address.value,
      link: e.target.website.value,
      notes: e.target.notes.value
    };
    //Use callback function to update suggestions
    props.updateSuggestions(newSuggestion);
    //Clear form
    e.target.name.value = "";
    e.target.address.value = "";
    e.target.website.value = "";
    e.target.notes.value = "";
    //Show success message briefly
    setTimeout(() => setShow(true), 100);
    setTimeout(() => setShow(false), 3000);
  };

  //Contains all content for the suggestion form
  return (
    <div>
      <div className="formSection">
        <h3>New suggestion? Submit here!</h3>
        <form className="lunchForm" onSubmit={handleAdd}>
          <div>
            <label>Lunch spot name: </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Chipotle"
            ></input>
          </div>
          <div>
            <label>Lunch spot address: </label>
            <input
              required
              name="address"
              type="text"
              placeholder="1000 New York Ave"
            ></input>
          </div>
          <div>
            <label>Lunch spot website: </label>
            <input
              required
              name="website"
              type="url"
              placeholder="http://www.chipotle.com"
            ></input>
          </div>
          <div>
            <label>Lunch spot notes: </label>
            <input name="notes" type="text" placeholder="Really tasty!"></input>
          </div>
          <br />
          <input className="formSubmitButton" type="submit"></input>
          {show ? <p>Success!</p> : <p></p>}
        </form>
      </div>
    </div>
  );
};

export default LunchForm;
