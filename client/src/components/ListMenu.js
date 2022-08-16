import React from "react";
import sampleData from "../mockData";
import ListRow from "./ListRow";

const ListMenu = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>My lists</td>
          <td>
            <button className="btn btn-outline-primary">Create List</button>
          </td>
        </tr>
      </thead>
      <tbody>
        {sampleData.sampleMyLists.lists.map((list) => (
          <ListRow listName={list} />
        ))}
      </tbody>
    </table>
  );
};

export default ListMenu;
