import React from "react";
import "../styles/PhotoDetailsModal.scss";

const modal = (props) => {
  const { isOpen, onClose } = props;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();  
  };

  return (
    isOpen && (
      <div className="photo-details-modal-overlay" onClick={handleOverlayClick}>
        <div className="photo-details-modal" onClick={handleContentClick}>
          <button className="photo-details-modal__close-button" onClick={onClose}>
            X
          </button>
         
        </div>
      </div>
    )
  );
};

export default modal;