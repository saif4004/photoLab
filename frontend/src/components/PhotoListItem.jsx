import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.urls.regular} alt="Photo" />
      <br />
      <img className="photo-list__user-profile" src={props.user.profile} alt="Profile" />
      <div>
        <h3 className="photo-list__user-info">{props.user.name}</h3>
        <h3 className="photo-list__user-location">{props.location.city} {props.location.country}</h3>
      </div>
    </div>
  );
};

export default PhotoListItem;