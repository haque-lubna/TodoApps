import React from "react";
import "../../static/css/modal.css";

export const Modal = ({ closeModal, children }) => {
  return (
    <div className="modalCustom">
      <div className="modalCustom-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
