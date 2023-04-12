import { Component } from "react";
// 3. Build a form component that allows a user to enter their name and email address. When the form is submitted, the component should update its state 
// with the user's information.
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "" };
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };

  onNameChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  onSubmitHandler = (event) => {
    alert(
      "Email is-> " +
        this.state.email+
        " Name is -> " +
        this.state.name
    );
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          onChange={this.onEmailChangeHandler}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={this.onNameChangeHandler}
        />
        <button type="submit"> Submit</button>
      </form>
    );
  }
}
export default Form;
