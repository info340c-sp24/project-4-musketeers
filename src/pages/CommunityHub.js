// CommunityHub.js
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import CommunityCard from '../components/CommunityCard';

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
      { id: 1, projectName: "Streamline Sound", projectDescription: "Enhancing Audio Quality for Streaming Platforms", imageUrl: "../images/comcard-1.avif", artistNames: ["Steven Heng"] },
      { id: 2, projectName: "The Digital Maestro", projectDescription: "Developing a Music Composition App", imageUrl: "../images/comcard-2.jpg", artistNames: ["Enrico Pratama, Carolyn Chen"] },
      { id: 3, projectName: "Virtual Virtuoso", projectDescription: "Building a VR Concert Experience", imageUrl: "../images/comcard-3.jpg", artistNames: ["Agnes Bisma"] },
      { id: 4, projectName: "The Beat Goes On", projectDescription: "Preserving Indigenous Music Traditions", imageUrl: "../images/comcard-4.jpg", artistNames: ["Edward Lee"] },
      { id: 5, projectName: "Synth Waves", projectDescription: "Exploring Retro Sounds in Modern Tracks", imageUrl: "../images/comcard-5.jpeg", artistNames: ["James Kim"] },
      { id: 6, projectName: "Sound Branding", projectDescription: "Creating Signature Sounds for Brands", imageUrl: "../images/comcard-6.jpg", artistNames: ["Theophila Abigail"] },
      { id: 7, projectName: "Tour de Force", projectDescription: "Planning and Executing a Virtual Music Tour", imageUrl: "../images/comcard-7.jpg", artistNames: ["Eugene Wongso, Samuel Purnama"] },
      { id: 8, projectName: "Echoes of the City", projectDescription: "An Urban Soundtrack", imageUrl: "../images/comcard-8.jpg", artistNames: ["Aurelle Alexander, Valerie Junus"] }
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
      <header className="header flex justify-center items-center bg-piano-blue text-light-blue h-60 m-0">
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
