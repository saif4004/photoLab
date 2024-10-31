import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  console.log(props)
  
  return (
    <div>
      <PhotoFavButton />
      <img className="photo-list__item" src={props.urls.regular} alt="Photo" />
      <br />
      <img className="photo-list__item" src={props.user.profile} alt="Profile" />
      <h1>{props.user.name}</h1>
      <h1>{props.location.city} {props.location.country}</h1>
    </div>
  );
};

export default PhotoListItem;