// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  const handlePhotoClick = (photo) => {
    setClickedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedPhoto(null);
  };

  return {
    favourites,
    isModalOpen,
    clickedPhoto,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
  };
};

export default useApplicationData;