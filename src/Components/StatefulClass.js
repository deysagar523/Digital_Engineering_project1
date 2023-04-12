import { Component } from "react";

class StatefulClass extends Component {
  state = {
    val: 1,
  };

  multiplyBy2 = () => {
    this.setState({ val: this.state.val * 2 });
  };
  divisionBy2 = () => {
    this.setState({ val: this.state.val / 2 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.val}</h1>
        <button onClick={this.multiplyBy2}>Multiply by 2 Class Component</button>
        <button onClick={this.divisionBy2}>Division by 2 Class Component</button>
      </div>
    );
  }
}

export default StatefulClass;
