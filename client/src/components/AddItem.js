import React from "react";

const AddItem = () => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn btn-outline-primary">Add</button>
      </div>
      <input type="text" className="form-control" placeholder="Add an item" />
    </div>
  );
};

export default AddItem;
