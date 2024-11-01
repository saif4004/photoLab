// frontend/src/App.jsx
import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [photoData, setPhotoData] = useState(photos);
  const addLikedPhoto = (likedPhoto) => {
    const newPhotoLikes = updateLikedPhoto(photos,likedPhoto);
    setPhotoData(newPhotoLikes);
  }

  return (
    <div className="App">
      <HomeRoute userPhotos={photos} userTopics = {topics} likedPhoto = {addLikedPhoto}/>
  </div>
  );
};

export default App;