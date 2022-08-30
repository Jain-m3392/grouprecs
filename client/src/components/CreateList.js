import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CreateList = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleClose = () => setShowCreateModal(false);
  const handleShow = () => setShowCreateModal(true);

  const handleCreate = () => {};
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
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary">Create new list</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateList;
