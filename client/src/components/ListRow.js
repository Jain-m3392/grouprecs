import React from "react";
import { Link } from "react-router-dom";

//TODO: write handleDelete function

const ListRow = (props) => {
  const handleDelete = () => {};

  return (
    <tr>
      <td>
        <Link to={`/${props.url}`} target="_blank" rel="noopener noreferrer">
          {props.name}
        </Link>
      </td>
      <td>
        <button className="btn btn-outline-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-outline-primary">Copy URL</button>
      </td>
    </tr>
  );
};

export default ListRow;
