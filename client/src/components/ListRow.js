import React from "react";
import { Link } from "react-router-dom";

const ListRow = (props) => {
  return (
    <tr>
      <td>
        <Link to={`/${props.url}`}>{props.name}</Link>
      </td>
      <td>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
      <td>
        <button className="btn btn-outline-primary">Copy URL</button>
      </td>
    </tr>
  );
};

export default ListRow;
