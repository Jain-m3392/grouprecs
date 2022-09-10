import React, { useState } from "react";

const ItemRow = (props) => {
  const handleDelete = () => {
    console.log(props.index);

    //remove item from listItems
    const newItemsStart = props.list.items.slice(0, props.index);
    const newItemsEnd = props.list.items.slice(props.index + 1);
    const newItems = newItemsStart.concat(newItemsEnd);

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
