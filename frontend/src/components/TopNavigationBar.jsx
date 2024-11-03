// frontend/src/components/TopNavigationBar.jsx
import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge'; // Import FavBadge

const TopNavigationBar = (props) => {
  const isFavPhotoExist = props.favourites.length > 0; 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        userTopics={props.userTopics} 
        onTopicClick={props.onTopicClick} 
      />
      
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
}
export default TopNavigationBar;