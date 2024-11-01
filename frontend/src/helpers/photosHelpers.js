
export const updateLikedPhoto = (photoPost, likedPhoto) => {
  const updatedPhoto = { ...photoPost };
  // Create a new object for the new URLs, including the 'favPhoto' property
  const newUrls = {
    ...photoPost.urls,
    favPhoto: likedPhoto
  };
  
  // Assign the new URLs object to the updated photo
  updatedPhoto.urls = newUrls;
  return updatedPhoto;
}

