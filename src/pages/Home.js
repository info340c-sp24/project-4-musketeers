import React from 'react';
import { Link } from 'react-router-dom'; // Used for navigation without reloading the page

const Home = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-5">Welcome to EchoSystem</h1>
      <p className="text-xl text-gray-600 mb-10">
        We amplify, empower, elevate, and harmonize the talents of musicians from around the globe.
      </p>
      
      <div className="mb-8">
        <h2 className="text-3xl text-gray-700 mb-3">Explore Our Masterclasses</h2>
        <p className="text-gray-500 mb-6">
          Join our exclusive sessions and learn from the best in the industry.
        </p>
        <Link to="/masterclass" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Discover Masterclasses
        </Link>
      </div>

      <div>
        <h2 className="text-3xl text-gray-700 mb-3">Join Our Community</h2>
        <p className="text-gray-500 mb-6">
          Connect with fellow musicians and enthusiasts in our community hub.
        </p>
        <Link to="/communityhub" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Visit the Community Hub
        </Link>
      </div>
    </div>
  );
};

export default Home;
