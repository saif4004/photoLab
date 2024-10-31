import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const parsedData = props.userPhotos.map((data) => (
    <PhotoListItem key = {data.id} {...data} />
  ));
  return (
    <div className="home-route">
      {parsedData}
    </div>
  );
};
export default PhotoList;
