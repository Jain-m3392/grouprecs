import React, { useState } from "react";
import sampleData from "../mockData";
import ListRow from "./ListRow";
import CreateList from "./CreateList";

const ListMenu = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>My lists</td>
          <td>
            <CreateList />
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
