import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ userProps, favourites = [], toggleFavourite }) {
  const isFavourite = favourites.includes(userProps.id); 
  
  const handleClick = () => {
    toggleFavourite(userProps.id); 
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon active={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;