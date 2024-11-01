import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from 'components/PhotoFavButton';




const PhotoList = (props) => {
  // console.log("PhotoList",props.userPhotos);
  const parsedData = props.userPhotos.map((data) => (
    <PhotoListItem key = {data.id} {...data} />
  ));
  return (
    <div className="PhotoList">
      {parsedData}
    </div>
  );
};
export default PhotoList;
