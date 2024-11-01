import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  let tempArray = ["YEEEEEEEEEEEEHAW"];
  return (
    <div className="home-route">
      <TopNavigationBar userTopics = {props.userTopics} />
      <PhotoList userPhotos={props.userPhotos} tempArray={tempArray}/>
      

    </div>
  );
};

export default HomeRoute;
