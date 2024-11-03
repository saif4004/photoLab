import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

const initialState = {
  favourites: [],
  isModalOpen: false,
  clickedPhoto: null,
  photoData: null,
  topicData: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.photoId],  
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.photoId),  
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.photoData,  
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.topicData,  
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        clickedPhoto: action.photo,  
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
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    clickedPhoto: state.clickedPhoto,
    photoData: state.photoData,
    topicData: state.topicData,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
  };
};

export default useApplicationData;