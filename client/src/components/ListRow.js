import React from "react";

const ListRow = (props) => {
  return (
    <tr>
      <td>{props.item}</td>
      <td>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ListRow;
