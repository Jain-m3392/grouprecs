import React, { useEffect, useState } from "react";
import sampleData from "../mockData";
import ListRow from "./ListRow";
import CreateList from "./CreateList";

const ListMenu = () => {
  const [storedLists, setStoredLists] = useState([]);

  useEffect(() => {
    setStoredLists(JSON.parse(localStorage.getItem("lists")));
  });

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
        {!storedLists ? (
          <tr>You have no lists. Create one!</tr>
        ) : (
          storedLists.map((list) => (
            <ListRow key={list.url} name={list.name} url={list.url} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default ListMenu;
