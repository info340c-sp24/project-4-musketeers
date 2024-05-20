import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CommunityCard from '../components/CommunityCard'; 
import './communityhub.css';

function CommunityHub() {
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedCards')
      ? JSON.parse(localStorage.getItem('bookmarkedCards'))
      : [];
    setBookmarkedCards(savedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarkedCards', JSON.stringify(bookmarkedCards));
  }, [bookmarkedCards]);

  const toggleBookmark = (cardId) => {
    setBookmarkedCards((prevBookmarkedCards) =>
      prevBookmarkedCards.includes(cardId)
        ? prevBookmarkedCards.filter((id) => id !== cardId)
        : [...prevBookmarkedCards, cardId]
    );
  };

  const filterFavorites = () => {
    setFiltered(true);
  };

  const resetFilter = () => {
    setFiltered(false);
  };

  const cardInfo = [
    { id: 1, title: "Fred Again.. 1", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred1.png" },
    { id: 2, title: "Peggy Gou 1", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/peggy1.png" },
    { id: 3, title: "Fred Again.. 2", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred2.png" },
    { id: 4, title: "John Summit 1", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/john1.png" },
    { id: 5, title: "Peggy Gou 2", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/peggy2.png" },
    { id: 6, title: "John Summit 2", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/john2.png" },
    { id: 7, title: "Fred Again.. 3", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred3.png" },
    { id: 8, title: "Fred Again.. 4", description: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred4.png" }
  ];

  const filteredCards = filtered
    ? cardInfo.filter((card) => bookmarkedCards.includes(card.id))
    : cardInfo;

  return (
    <div className="min-h-screen bg-white">
      <header className="header flex justify-center items-center bg-indigo-700 text-pink-200 h-60 m-0">
        <div className="container-fluid flex justify-center items-center">
          <h1 className="text-5xl font-bold text-center">COMMUNITY HUB</h1>
        </div>
      </header>
      <Helmet>
        <title>EchoSystem | Community Hub</title>
      </Helmet>

      <div className="flex justify-center items-center mt-6">
        <div className="text-center mx-4">
          <button className="text-xl font-semibold border-b-4 border-transparent hover:border-black" onClick={resetFilter}>
            Exploreeeeee
          </button>
        </div>
        <div className="text-center mx-4">
          <button className="text-xl font-semibold border-b-4 border-transparent hover:border-black" onClick={filterFavorites}>
            Favorites
          </button>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-10'>
        {filteredCards.map((card) => (
          <CommunityCard
            key={card.id}
            card={card}
            isBookmarked={bookmarkedCards.includes(card.id)}
            onBookmarkToggle={() => toggleBookmark(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CommunityHub;
