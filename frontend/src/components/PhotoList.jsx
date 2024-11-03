import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const parsedData = props.userPhotos.map((data) => (
    <PhotoListItem
      key={data.id}
      {...data}
      favourites={props.favourites}
      toggleFavourite={props.toggleFavourite}
      onPhotoClick={props.onPhotoClick}
    />
  ));
  return <div className="PhotoList">{parsedData}</div>;
};

export default PhotoList;