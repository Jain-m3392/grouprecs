import React, { useState } from "react";
import ListRow from "./ListRow";
import CreateList from "./CreateList";

//TODO: Differentiate lists you've created vs lists you've saved
//TODO: Add ability to delete lists if you've created them and remove from library if you've saved them

const ListMenu = () => {
  const [storedLists, setStoredLists] = useState(
    JSON.parse(localStorage.getItem("grouprecs_lists"))
  );

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
            <ListRow
              key={list.url}
              name={list.name}
              url={list.url}
              storedLists={storedLists}
              setStoredLists={setStoredLists}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default ListMenu;
