import React, { useState } from "react";

//TODO: Change remove logic so that it doesn't remove items with the same name, only that specific item

const ItemRow = (props) => {
  const handleDelete = () => {
    //remove item from listItems
    let newItems = props.list.items.filter((item) => item !== props.item);

    //new object to be used on our API
    let newList = {
      url: props.list.url,
      name: props.list.name,
      items: newItems,
    };

    //update server
    fetch(`http://localhost:5000/update/${props.list.url}`, {
      method: "PATCH",
      body: JSON.stringify(newList),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) =>
        res.json().then(() => {
          //update react page
          props.setList(newList);
        })
      )
      .then((json) => console.log(json));
  };

  return (
    <tr>
      <td>{props.item}</td>
      <td>
        <button className="btn btn-outline-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
