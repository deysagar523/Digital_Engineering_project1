import React, { useState, useEffect } from "react";

const DeleteItemFunc = () => {
  const [arr, setArr] = useState([
    { id: 1, name: "Sagar" },
    { id: 2, name: "Hironmoy" },
    { id: 3, name: "Bijoy" },
    { id: 4, name: "Papai" },
    { id: 5, name: "Rahul" },
    { id: 6, name: "Ranjit" },
    { id: 7, name: "Pritom" },
    { id: 8, name: "Prodip" },
  ]);

  const onDeleteHandler = (ind) => {
    const newArr = [...arr];
    newArr.splice(ind, 1);
    setArr(newArr);
  };

  return (
    <>
      {arr.map((item, ind) => {
        return (
          <div
            style={{
              border: "1px solid black",
              width: "50%",
              padding: "10px",
              margin: "15px auto",
              textAlign: "center",
            }}
          >
            <h1>
              For Id {item.id} Name is {item.name}
            </h1>
            <button
              class="btn btn-outline-danger"
              onClick={() => onDeleteHandler(ind)}
            >
              Delete Item
            </button>
          </div>
        );
      })}
    </>
  );
};
export default DeleteItemFunc;
