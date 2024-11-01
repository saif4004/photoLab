import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import {updateLikedPhoto} from '../helpers/photosHelpers'

const photo1 = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
  },
  "user": {
    "id": "1",
    "username": "exampleuser",
    "name": "Joe Example",
    "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
}


function PhotoFavButton(props) {
  // console.log("XDDD: ",props.userProps);
const [favouritePhoto, setFavouritePhoto] = useState(false);
const handleClick = () => {
  setFavouritePhoto(prev => !prev);
  console.log(`Photo ID ${props.userProps.id} is ${!favouritePhoto ? 'liked' : 'unliked'}`);

  const updatedPhoto = updateLikedPhoto(props.userProps.urls, true);
  console.log(updatedPhoto);
};
return (
  <div className="photo-list__fav-icon" onClick={handleClick}>
    <div className="photo-list__fav-icon-svg">
      <FavIcon active={favouritePhoto}/>
    </div>
  </div>
);
}

export default PhotoFavButton;