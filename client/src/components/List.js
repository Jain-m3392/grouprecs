import React from "react";
import sampleData from "../mockData";
import AddItem from "./AddItem";
import { useParams } from "react-router-dom";
import ItemRow from "./ItemRow";

const findList = (url) => {
  console.log(sampleData.sampleApiData1.url);
  console.log("list url is", url);
  return sampleData.sampleApiData1.url === url
    ? sampleData.sampleApiData1
    : sampleData.sampleApiData2;
};

const List = () => {
  const params = useParams();
  const list = findList(params.url);
  return (
    <>
      <h2>{list.name}</h2>
      <AddItem />
      <table>
        <tbody>
          {list.items.map((item) => (
            <ItemRow key={item} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
