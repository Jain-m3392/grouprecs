import React from "react";
import { Link } from "react-router-dom";

const ListRow = (props) => {
  console.log(props.list);
  return (
    <tr>
      <td>
        <Link to={`/${props.url}`}>{props.name}</Link>
      </td>
      <td>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ListRow;
