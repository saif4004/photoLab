import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [favourites, setFavourites] = useState([]); 
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };
  console.log("Favourites state:", favourites);

  return (
    <div className="App">
      
      <HomeRoute
        userPhotos={photos}
        userTopics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;