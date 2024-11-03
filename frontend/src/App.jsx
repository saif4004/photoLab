import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import Modal from './components/modal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
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
  // console.log("Favourites state:", favourites);
  const handlePhotoClick = (photo) => {
    setClickedPhoto(photo);
    setIsModalOpen(true); 
};

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedPhoto(null);
  };

  return (
    <div className="App">
      
      <HomeRoute
        userPhotos={photos}
        userTopics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} clickedPhoto={clickedPhoto} />
    </div>
  );
};

export default App;