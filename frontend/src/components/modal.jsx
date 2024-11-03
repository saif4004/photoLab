import React from "react";
import "../styles/PhotoDetailsModal.scss";

const modal = (props) => {
  console.log("XD: ",props);
  const { isOpen, onClose } = props;
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();  
  };
  if(props.clickedPhoto !== null) {
    console.log(props.clickedPhoto.urls.full);
  }

  return (
    isOpen && (
      <div className="photo-details-modal-overlay" onClick={handleOverlayClick}>
        <div className="photo-details-modal" onClick={handleContentClick}>
          <button className="photo-details-modal__close-button" onClick={onClose}>
            X
          </button>
          {props.clickedPhoto && (  // Check if clickedPhoto exists
            <div>
              <img src={props.clickedPhoto.urls.regular} alt="Selected" />
              <h3>{props.clickedPhoto.user.name}</h3>
              <p>{props.clickedPhoto.location.city}, {props.clickedPhoto.location.country}</p>
            </div>
          )}

        </div>
      </div>
    )
  );
};

export default modal;