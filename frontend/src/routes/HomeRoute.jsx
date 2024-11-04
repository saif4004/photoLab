import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ userTopics, favourites, onTopicClick, userPhotos, toggleFavourite, onPhotoClick }) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        userTopics={userTopics}
        favourites={favourites}
        onTopicClick={onTopicClick} 
      />
      <PhotoList
        userPhotos={userPhotos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
