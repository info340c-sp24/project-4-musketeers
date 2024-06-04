import React from 'react';
import CommunityCard from '../components/CommunityCard';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <div className='flex flex-wrap justify-center mt-10'>
        {favorites.length > 0 ? (
          favorites.map((fav, index) => (
            <CommunityCard
              key={index}
              title={fav.title}
              description={fav.description}
              imageUrl={fav.imageUrl}
              isFavorite={true}
            />
          ))
        ) : (
          <p>No favorites added yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;