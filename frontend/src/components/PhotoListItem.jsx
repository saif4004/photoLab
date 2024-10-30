import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.imageSource} alt="Photo" />
      <br />
      <img src={props.profile} alt="Profile" />
      <h1>{props.username}</h1>
      <h1>{props.location.city} {props.location.country}</h1>
    </div>    
  );
};

export default PhotoListItem;
