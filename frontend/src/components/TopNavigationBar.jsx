import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList userTopics={props.userTopics} />
      {props.favourites.length > 0 && (
        <div className="notification">
          You have {props.favourites.length} favourite photo{props.favourites.length > 1 ? 's' : ''}!
        </div>
      )}
      
      <FavIcon />
    </div>
  );
}

export default TopNavigationBar;