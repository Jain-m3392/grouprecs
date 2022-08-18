import React from "react";
import sampleData from "../mockData";
import AddItem from "./AddItem";
import ListRow from "./ListRow";
import { useParams } from "react-router-dom";

const findList = (url) => {
  return sampleData.sampleApiData1.url == url
    ? sampleData.sampleApiData1
    : sampleData.sampleApiData2;
};

const List = () => {
  const params = useParams;
  const list = findList(params.url);
  console.log(params);
  console.log(list);
  return (
    <>
      <table>
        <thead>{list.name}</thead>
        <tbody>
          <tr>
            <AddItem />
          </tr>
          {list.items.map((item) => (
            <ListRow key={item} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
