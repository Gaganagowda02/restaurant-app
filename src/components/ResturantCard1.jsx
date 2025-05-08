import React from 'react';

const ResturantCard1 = ({ name, image, cuisine, rating, address }) => {
  return (
    <div className="resturent-card">
      <img className="resturent-card_image" src={image} alt={name} />
      <div className="resturent-card-details">
        <h2 className="resturent-card_title">{name}</h2>
        <p className="resturent-card_cuisine">{cuisine}</p>
        <p className="resturent-card_rating">Rating: {rating}</p>
        <p className="resturent-card_address">Address: {address}</p>
      </div>
    </div>
  );
};

export default ResturantCard1;
