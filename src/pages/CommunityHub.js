// CommunityHub.js
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CommunityCard from '../components/CommunityCard'; 
import { useNavigate } from 'react-router-dom'; 

function CommunityHub() {
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedCards')
      ? JSON.parse(localStorage.getItem('bookmarkedCards'))
      : [];
    setBookmarkedCards(savedBookmarks);

    const savedProjects = localStorage.getItem('projects')
      ? JSON.parse(localStorage.getItem('projects'))
      : [];
    
    // Predefined card info
    const predefinedCards = [
      { id: 1, projectName: "Fred Again.. 1", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred1.png", artistNames: [] },
      { id: 2, projectName: "Peggy Gou 1", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/peggy1.png", artistNames: [] },
      { id: 3, projectName: "Fred Again.. 2", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred2.png", artistNames: [] },
      { id: 4, projectName: "John Summit 1", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/john1.png", artistNames: [] },
      { id: 5, projectName: "Peggy Gou 2", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/peggy2.png", artistNames: [] },
      { id: 6, projectName: "John Summit 2", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/john2.png", artistNames: [] },
      { id: 7, projectName: "Fred Again.. 3", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred3.png", artistNames: [] },
      { id: 8, projectName: "Fred Again.. 4", projectDescription: "If a dog chews shoes whose shoes does he choose?", imageUrl: "../images/fred4.png", artistNames: [] }
    ];

    // Merge predefined cards with saved projects
    const allProjects = [...predefinedCards, ...savedProjects];
    setProjects(allProjects);
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

  const handleAddProjectClick = () => {
    navigate('/communityform');
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'pink',
    width: '100%',
    position: 'relative'
  };

  const addProjectButtonStyle = {
    position: 'absolute',
    right: '20px',
    top: '10px',
    padding: '10px',
    backgroundColor: '#2f3c7e',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '10px'
  };

  const filteredCards = filtered
    ? projects.filter((card) => bookmarkedCards.includes(card.id))
    : projects;

  return (
    <div className="min-h-screen bg-white">
      <header className="header flex justify-center items-center bg-pale-gray text-light-blue h-60 m-0">
        <div className="container-fluid flex justify-center items-center">
          <h1 className="text-5xl font-bold text-center">COMMUNITY HUB</h1>
        </div>
      </header>
      <Helmet>
        <title>EchoSystem | Community Hub</title>
      </Helmet>

      <div style={headerStyle}>
        <button style={addProjectButtonStyle} onClick={handleAddProjectClick}>
          + Add Project
        </button>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="text-center mx-4">
          <button className="text-xl font-semibold border-b-4 border-transparent hover:border-black" onClick={resetFilter}>
            Explore
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
