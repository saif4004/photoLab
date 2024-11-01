import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar userTopics={props.userTopics} />
      <PhotoList
        userPhotos={props.userPhotos}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;