import { Component } from "react";
// 1. create a form. take the firstname and lastname as form fields.
// give a submit button. on click of submit show the form inputs in an alert.
class ShowFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
    this.onFirstNameChangeHandler = this.onFirstNameChangeHandler.bind(this);
    this.onLastNameChangeHandler = this.onLastNameChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onFirstNameChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ firstName: event.target.value });
  };

  onLastNameChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ lastName: event.target.value });
  };
  onSubmitHandler = (event) => {
    alert(
      "First Name is-> " +
        this.state.firstName +
        " Last Name is -> " +
        this.state.lastName
    );
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" placeholder="First Name" onChange={this.onFirstNameChangeHandler}/>
        <input type="text" placeholder="Last Name" onChange={this.onLastNameChangeHandler}/>
        <button type="submit"> Submit</button>
      </form>
    );
  }
}
export default ShowFormInput;
