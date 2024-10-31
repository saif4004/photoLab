// frontend/src/App.jsx
import React from 'react';

//  import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import TopNavigationBar from './components/TopNavigationBar';
 import TopicList from 'components/TopicList';
 import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
    <TopNavigationBar />
    <PhotoList />
  </div>
  );
};

export default App;