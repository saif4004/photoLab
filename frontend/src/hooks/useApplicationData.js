import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
};

const initialState = {
  favourites: [],
  isModalOpen: false,
  clickedPhoto: null,
  photoData: null,
  topicData: null,
  selectedTopicId: null,
};
function reducer(state, action) {
  const { type, payload, photoId, topicId, photo } = action;

  switch (type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== photoId),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: payload,
      };

    case ACTIONS.SET_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopicId: topicId,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        clickedPhoto: photo,
        isModalOpen: true,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: true,
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        clickedPhoto: null,
      };

    default:
      console.warn(`Unsupported action type: ${type}`);
      return state;
  }
}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);
  useEffect(() => {
    if (state.selectedTopicId) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopicId}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }
  }, [state.selectedTopicId]); 

  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });  
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });  
    }
  };

  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });  
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL }); 
  };
  const onTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, topicId });
  };
  

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    clickedPhoto: state.clickedPhoto,
    photoData: state.photoData,
    topicData: state.topicData,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
    onTopicClick,
  };
};

export default useApplicationData;