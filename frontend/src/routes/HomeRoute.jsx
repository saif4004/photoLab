import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import TopicList from 'components/TopicList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // console.log(props.userPhotos);
  return (
    <div className="home-route">
      <TopNavigationBar userTopics = {props.userTopics} />
      <PhotoList userPhotos={props.userPhotos}/>
    </div>
  );
};

export default HomeRoute;
