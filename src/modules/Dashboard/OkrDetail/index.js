import React from "react";
import Modal from "../../../components/Modal";

const OkrDetail = ({ toggleModal, selectedNode }) => {
  return (
    <Modal toggleModal={toggleModal} className="modal-container">
      <>
        <p className={"header"}>Category: {selectedNode.category}</p>
        {selectedNode.parentObjectiveTitle && (
          <p>Parent Objective: {selectedNode.parentObjectiveTitle} </p>
        )}
        <p>Metric Target: {selectedNode.metric_target} </p>
      </>
    </Modal>
  );
};

export default OkrDetail;
