import React, { useState, useEffect } from "react";
import classes from "./Func.module.css";
const ShowFormInputFunc = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    alert(
      "Your First Name -> " +
        enteredFirstName +
        "  Your Last Name -> " +
        enteredLastName
    );
    setEnteredFirstName('');
    setEnteredLastName('');
  };
  return (
    <>
      <form className={classes.input}>
        <label>First Name</label>
        <input
          value={enteredFirstName}
          placeholder="First Name"
          onChange={(event) => setEnteredFirstName(event.target.value)}
        />
        <label>Last Name</label>
        <input
          value={enteredLastName}
          placeholder="Last Name"
          onChange={(event) => setEnteredLastName(event.target.value)}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </>
  );
};
export default ShowFormInputFunc;
