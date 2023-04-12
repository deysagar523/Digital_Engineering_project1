import React, { useState, useEffect } from "react";
import classes from "./Func.module.css";
import Card from "react-bootstrap/Card";

const FormFunc = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [showField, setShoWField] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    //   alert(
    //     "Your First Name -> " +
    //       enteredFirstName +
    //       "  Your Last Name -> " +
    //       enteredLastName
    //   );
    setShoWField(true);
    // setEnteredEmail("");
    // setEnteredName("");
  };
  return (
    <div className={classes.input}>
      <form>
        <label>Email</label>
        <input
          value={enteredEmail}
          placeholder="Email"
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <label>Name</label>
        <input
          value={enteredName}
          placeholder="Name"
          onChange={(event) => setEnteredName(event.target.value)}
        />
        <button onClick={submitHandler} style={{margin:"5% 45%"}}>Submit</button>
      </form>
      {showField && (
        <Card>
          <Card.Body>
            <Card.Title
              style={{
                border: "1px solid black",
                textAlign: "center",
                backgroundColor: "#99ccff",
              }}
            >
              User Details
            </Card.Title>
            <h1>Email -{enteredEmail}</h1>
            <h1>Name-{enteredName}</h1>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default FormFunc;
