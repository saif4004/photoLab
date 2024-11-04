import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favourites,
    isModalOpen,
    clickedPhoto,
    photoData,
    topicData,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
    onTopicClick,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        userPhotos={photoData}
        userTopics={topicData}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
        onTopicClick={onTopicClick}
      />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        clickedPhoto={clickedPhoto}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
