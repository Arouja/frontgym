import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({ isOpen, toggle, handleConfirmDelete }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader className="text-center" toggle={toggle}>
        <div className="icon-box">
          <i className={`fa red-circle fa-trash`}></i>
        </div>
        <h2>Are you sure?</h2>
      </ModalHeader>
      <ModalBody>Do you really want to delete this record? This process cannot be undone.</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
        <Button color="danger" onClick={handleConfirmDelete}>Delete</Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
