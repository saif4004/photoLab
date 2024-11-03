import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import Modal from './components/modal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favourites,
    isModalOpen,
    clickedPhoto,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
  } = useApplicationData();

  return (
    <div className="App">
      
      <HomeRoute
        userPhotos={photos}
        userTopics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      <Modal isOpen={isModalOpen} 
      onClose={closeModal} 
      clickedPhoto={clickedPhoto}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
       
      />
    </div>
  );
};

export default App;