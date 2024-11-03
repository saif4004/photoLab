// frontend/src/components/FavBadge.jsx
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} /> {/* Pass displayAlert based on isFavPhotoExist */}
    </div>
  );
};

export default FavBadge;