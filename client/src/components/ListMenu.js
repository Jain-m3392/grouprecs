import React, { useEffect, useState } from "react";
import ListRow from "./ListRow";
import CreateList from "./CreateList";

const ListMenu = () => {
  const [storedLists, setStoredLists] = useState([]);

  useEffect(() => {
    console.log("lists are", localStorage.getItem("lists"));
    try {
      setStoredLists(JSON.parse(localStorage.getItem("lists")));
    } catch (err) {
      console.log("Storage issue:", err);
    }
  });

  console.log("State lists are", storedLists);

  return (
    <table>
      <thead>
        <tr>
          <td>My lists</td>
          <td>
            <CreateList
              storedLists={storedLists}
              setStoredLists={setStoredLists}
            />
          </td>
        </tr>
      </thead>
      <tbody>
        {!storedLists ? (
          <tr>
            <td>
              <p>You have no lists. Create one!</p>
            </td>
          </tr>
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
