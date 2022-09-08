import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CreateList = (props) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [listName, setListName] = useState(" ");

  const handleClose = () => setShowCreateModal(false);
  const handleShow = () => setShowCreateModal(true);

  //TODO: Add name validation to prevent empty names
  const handleCreate = () => {
    let newListLocal = { url: "", name: listName };
    let newList = { url: "", name: listName, items: [] };
    console.log(newList);

    fetch("http://localhost:5000/create", {
      method: "POST",
      body: JSON.stringify(newList),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(
        (
          res //now we set the local list's url & stash it locally to display in listMenu
        ) =>
          res
            .json()
            .then((data) => {
              newListLocal.url = data.url;

              //store object locally
              if (!props.storedLists) {
                console.log("No lists.");
                localStorage.setItem(
                  "grouprecs_lists",
                  JSON.stringify([newListLocal])
                );
                props.setStoredLists(
                  JSON.parse(localStorage.getItem("grouprecs_lists"))
                );
              } else {
                console.log("There are some lists");
                localStorage.setItem(
                  "grouprecs_lists",
                  JSON.stringify([...props.storedLists, newListLocal])
                );
                props.setStoredLists(
                  JSON.parse(localStorage.getItem("grouprecs_lists"))
                );
              }

              //close modal
              setShowCreateModal(false);

              //opening a new tab
              window.open(
                `http://localhost:3000/${data.url}`,
                "_blank",
                "noopener,noreferrer"
              );
            })
            .catch((error) => {
              console.log(error);
            })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNameChange = (event) => {
    setListName(event.target.value);
  };
  return (
    <>
      <button className="btn btn-outline-primary" onClick={handleShow}>
        Create List
      </button>
      <Modal
        show={showCreateModal}
        onHide={handleClose}
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Name your list"
            onChange={handleNameChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={handleCreate}>
            Create new list
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateList;
