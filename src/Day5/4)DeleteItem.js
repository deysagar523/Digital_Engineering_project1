import { Component } from "react";
//4. Write a component that displays a list of items. Each item should have a "delete" button next to it. When the delete button is clicked,
// the item should be removed from the list and the component's state should be updated accordingly.

class DeleteItem extends Component {
  state = {
    arr: [
      { id: 1, name: "Sagar" },
      { id: 2, name: "Hironmoy" },
      { id: 3, name: "Bijoy" },
      { id: 4, name: "Papai" },
      { id: 5, name: "Rahul" },
      { id: 6, name: "Ranjit" },
      { id: 7, name: "Pritom" },
      { id: 8, name: "Prodip" },
    ],
  };

  onDeleteHandler = (ind) => {
    const newArr = [...this.state.arr];
    newArr.splice(ind, 1);
    this.setState({ arr: newArr });
  };

  render() {
    return (
      <div>
        {this.state.arr.map((data, ind) => {
          return (
            <div
              style={{
                border: "1px solid black",
                width: "50%",
                padding: "10px",
                margin: "15px auto",
              }}
            >
              <h1>
                For Id {data.id} Name is {data.name}
              </h1>
              <button
                class="btn btn-outline-danger"
                onClick={() => this.onDeleteHandler(ind)}
              >
                Delete Item
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default DeleteItem;
