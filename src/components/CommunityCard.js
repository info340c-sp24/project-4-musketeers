import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; 

const CommunityCard = ({ card, isBookmarked, onBookmarkToggle }) => {
  return (
    <div className="p-4 hover:scale-105 ease-in-out duration-150">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'>
          <img 
            className='rounded-t-xl w-full h-80 object-cover' 
            src={card.imageUrl} 
            alt={card.title} 
            style={{ objectFit: 'cover' }}
          />
        </figure>
        <div className="card-body m-2">
          <h1 className="card-title font-bold text-xl">{card.projectName}</h1>
          <p>{card.projectDescription}</p>
          <p><strong>Collaborators:</strong> {card.artistNames.join(', ')}</p>
          <div className="card-actions justify-end">
            <button
              className="btn mt-2"
              onClick={onBookmarkToggle}
              style={{ backgroundColor: '#white', borderColor: '#2f3c7e' }}
            >
              <FontAwesomeIcon icon={isBookmarked ? fasHeart : farHeart} style={{ color: isBookmarked ? '#2f3c7e' : '#2f3c7e' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CommunityCard.propTypes = {
  card: PropTypes.object.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  onBookmarkToggle: PropTypes.func.isRequired,
};

export default CommunityCard;