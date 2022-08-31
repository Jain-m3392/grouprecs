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
      body: newList,
    }).then((
      res //now we set the local list's url & stash it locally to display in listMenu
    ) =>
      res
        .json()
        .then((data) => {
          newListLocal.url = data.url;

          //store object locally
          props.setStoredLists(
            props.storedLists.map(...props.storedList, newListLocal)
          );

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
    );
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
