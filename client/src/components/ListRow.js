import React from "react";

const ListRow = (props) => {
  return (
    <tr>
      <td>{props.listName}</td>
      <td>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ListRow;
