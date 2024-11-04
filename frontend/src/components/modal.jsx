//Note I accidentally wrote the modal logic here insted of the made file in the route dirctory. I moved everything to the PhotoDetailsModal file.


// import React from "react";
// import "../styles/PhotoDetailsModal.scss";
// import PhotoFavButton from "./PhotoFavButton";
// import PhotoList from "./PhotoList";
// import closeSymbol from '../assets/closeSymbol.svg';



// const modal = (props) => {
//   const { isOpen, onClose, clickedPhoto } = props;
//   const handleOverlayClick = () => {
//     onClose();
//   };

//   const handleContentClick = (event) => {
//     event.stopPropagation();  
//   };
//   let similarPhotosArray = [];
//   if (clickedPhoto && clickedPhoto.similar_photos) {
//     similarPhotosArray = Object.values(clickedPhoto.similar_photos); 
//   }
//   return (
//     isOpen && (
//       <div className="photo-details-modal-overlay" onClick={handleOverlayClick}>
//         <div className="photo-details-modal" onClick={handleContentClick}>
//           <button className="photo-details-modal__close-button" onClick={onClose}>
//           <img src={closeSymbol} alt="close symbol" />
//           </button>
//           {clickedPhoto && (
//             <div className="photo-list__item">
//               <PhotoFavButton
//                 userProps={clickedPhoto}
//                 favourites={props.favourites} 
//                 toggleFavourite={props.toggleFavourite} 
//               />
//               <img className="photo-details-modal__image"
//                 src={clickedPhoto.urls.regular}
//                 alt="Photo"
//               />
//               <div className="photo-details-modal__header">
//               <img
//                 className="photo-list__user-profile"
//                 src={clickedPhoto.user.profile}
//                 alt="Profile"
//               />
//                 <h3 className="photo-list__user-info">{clickedPhoto.user.name}</h3>
//                 <h3 className="photo-list__user-location">
//                   {clickedPhoto.location.city} {clickedPhoto.location.country}
//                 </h3>
//               </div>
//             </div>
//           )}
//           {similarPhotosArray.length > 0 && ( 
//             <div>
//               <h4>Similar Photos</h4>
//               <PhotoList 
//                 userPhotos={similarPhotosArray} 
//                 favourites={props.favourites}
//                 toggleFavourite={props.toggleFavourite}
//                 onPhotoClick={props.onPhotoClick} 
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default modal;