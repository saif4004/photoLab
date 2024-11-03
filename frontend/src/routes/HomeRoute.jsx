import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import TopicList from '../components/TopicList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // console.log("HomeRoute: ", props);

  return (
    <div className="home-route">
      <TopNavigationBar 
        userTopics={props.userTopics}
        favourites={props.favourites}
        onTopicClick={props.onTopicClick} 
      />
      <PhotoList
        userPhotos={props.userPhotos}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
        onPhotoClick={props.onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;