import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import Modal from './components/Modal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [favourites, setFavourites] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };
  // console.log("Favourites state:", favourites);
  const handlePhotoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;