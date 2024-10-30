// frontend/src/App.jsx
import React from 'react';

 import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <PhotoListItem
    imageSource={sampleDataForPhotoListItem.imageSource}
    profile={sampleDataForPhotoListItem.profile}
    username={sampleDataForPhotoListItem.username}
    location={sampleDataForPhotoListItem.location}
    />
    
  );
};

export default App;
