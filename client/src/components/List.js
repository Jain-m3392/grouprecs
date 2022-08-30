import React from "react";
import AddItem from "./AddItem";
import { useParams } from "react-router-dom";
import ItemRow from "./ItemRow";

const findList = (url) => {};

const List = () => {
  const params = useParams();
  const list = fetchList(params.url);
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
