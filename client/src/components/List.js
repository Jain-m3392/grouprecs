import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import { useParams } from "react-router-dom";
import ItemRow from "./ItemRow";

const List = () => {
  const params = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    //fetch api data
    fetch(`http://localhost:5000/list/${params.url}`).then((res) =>
      res
        .json()
        .then((data) => setList(data))
        .catch((error) => {
          console.log(error);
        })
    );
  }, [list]);

  if (list === null) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <h2>{list.name}</h2>
      <AddItem list={list} setList={setList} />
      <table>
        <tbody>
          {list.items.map((item) => (
            <ItemRow key={item} item={item} list={list} setList={setList} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
