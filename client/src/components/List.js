import React from "react";
import sampleData from "../mockData";
import AddItem from "./AddItem";
import ListRow from "./ListRow";

const List = () => {
  return (
    <>
      <table>
        <thead>{sampleData.sampleList.name}</thead>
        <tbody>
          <tr>
            <AddItem />
          </tr>
          {sampleData.sampleList.items.map((item) => (
            <ListRow key={item} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
