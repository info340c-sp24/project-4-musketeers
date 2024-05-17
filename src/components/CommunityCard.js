import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const CommunityCard = ({ card, isBookmarked, onBookmarkToggle }) => {
  return (
    <div className="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'>
          <img className='rounded-t-xl w-full h-80' src={card.imageUrl} alt={card.title} />
        </figure>
        <div className="card-body m-2">
          <h2 className="card-title">{card.title}</h2>
          <p>{card.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2" onClick={onBookmarkToggle}>
              <FontAwesomeIcon icon={isBookmarked ? fasHeart : farHeart} style={{ color: isBookmarked ? 'black' : 'gray' }} />
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