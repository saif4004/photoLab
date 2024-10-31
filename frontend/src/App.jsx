// frontend/src/App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


const App = () => {
  return (
    <div className="App">
      <HomeRoute userPhotos={photos} userTopics = {topics} />
  </div>
  );
};

export default App;