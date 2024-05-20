import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [changingText, setChangingText] = useState('amplify');
  const texts = ["amplify", "empower", "elevate", "harmonize"];
  let count = 0;

  useEffect(() => {
    const updateText = () => {
      setChangingText(texts[count % texts.length]);
      count++;
    };

    const intervalId = setInterval(updateText, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <Helmet>
        <title>EchoSystem | Home</title>
      </Helmet>
      <video
        src="../images/EchoSysVid.mp4"
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      />
      <div className="absolute top-0 right-0 mt-4 mr-4 z-20 flex space-x-4">
        <Link to="/signup" className="nav-button text-white">SIGN UP</Link>
        <Link to="/mastercards" className="nav-button text-white">MASTERCLASS</Link>
        <Link to="/communityhub" className="nav-button text-white">COMMUNITY HUB</Link>
      </div>
      <div className="relative z-20 text-center text-white">
        <h1>EchoSystem</h1>
        <div className="tagline">
          we <span id="changing-text">{changingText}</span> musicians
        </div>
      </div>
    </div>
  );
};

export default Home;
