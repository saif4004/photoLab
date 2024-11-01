const photo1 = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
  },
  "user": {
    "id": "1",
    "username": "exampleuser",
    "name": "Joe Example",
    "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
}



const updateLikedPhoto = (photoPost, likedPhoto) => {
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

const newPhoto = updateLikedPhoto(photo1, true);
console.log(photo1)
console.log(newPhoto);