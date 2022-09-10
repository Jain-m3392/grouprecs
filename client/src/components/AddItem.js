import React, { useState } from "react";

const AddItem = (props) => {
  const [itemName, setItemName] = useState("");

  const handleAdd = () => {
    if (itemName.trim().length !== 0) {
      let newList = {
        url: props.list.url,
        name: props.list.name,
        items: [...props.list.items, itemName],
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
            setItemName("");
          })
        )
        .then((json) => console.log(json));
    } else {
      setItemName("");
    }
  };

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn btn-outline-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Add an item"
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />
    </div>
  );
};

export default AddItem;
