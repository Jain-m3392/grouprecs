import React from "react";
import { Link } from "react-router-dom";

const ListRow = (props) => {
  return (
    <tr>
      <td>
        <Link to={props.list.url}>{props.list.name}</Link>
      </td>
      <td>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ListRow;
