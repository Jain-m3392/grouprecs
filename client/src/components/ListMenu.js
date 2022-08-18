import React from "react";
import sampleData from "../mockData";
import ListRow from "./ListRow";

const ListMenu = () => {
  console.log(sampleData.sampleLocalData.lists);
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
        {sampleData.sampleLocalData.lists.map((list) => (
          <ListRow key={list.url} name={list.name} url={list.url} />
        ))}
      </tbody>
    </table>
  );
};

export default ListMenu;
