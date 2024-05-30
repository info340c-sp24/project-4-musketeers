// CommunityCard.js
import React from 'react';
import PropTypes from 'prop-types';

const CommunityCard = ({ card, isBookmarked, onBookmarkToggle }) => {
  return (
    <div className="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'>
          <img className='rounded-t-xl w-full h-80' src={card.imageUrl} alt={card.title} />
        </figure>
        <div className="card-body m-2">
          <h1 className="card-title font-bold text-xl">{card.projectName}</h1>
          <p>{card.projectDescription}</p>
          <p><strong>Collaborators:</strong> {card.artistNames.join(', ')}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2" onClick={onBookmarkToggle}>
              {isBookmarked ? 'Unbookmark' : 'Bookmark'}
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
