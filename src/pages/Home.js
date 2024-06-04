import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [changingText, setChangingText] = useState('amplify');
  const [animationClass, setAnimationClass] = useState('fade-slide-in');
  const texts = ["amplify", "empower", "elevate", "harmonize"];
  let count = 0;

  useEffect(() => {
    const updateText = () => {
      setAnimationClass('fade-slide-out');
      setTimeout(() => {
        setChangingText(texts[count % texts.length]);
        setAnimationClass('fade-slide-in');
        count++;
      }, 500); // This timeout should match the duration of fadeSlideOut animation
    };

    const intervalId = setInterval(updateText, 2000);
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
        playsInline
        className="absolute inset-0 z-10 w-full h-full object-cover"
      />

      <div className="absolute top-0 right-8 mt-4 mr-4 z-20 flex space-x-4">
        <Link to="/login" className="nav-button text-white nav">LOG IN / SIGN UP</Link>
      </div>
      <div className="relative z-20 text-center text-white pb-6">
        <div className='text-4xl lg:text-7xl font-extrabold pb-4' data-aos="fade-down" data-aos-duration="2000">ECHOSYSTEM</div>
        <div className="tagline text-xl pt-2" data-aos="fade-up" data-aos-duration="2000">
          we <span id="changing-text" className={animationClass}>{changingText}</span> musicians
        </div>
      </div>

      <div className="absolute mr-4 z-20 flex space-x-8 flex-wrap mx-auto bottom-10">
        <Link to="/masterclass" className="nav-button text-white nav">MASTERCLASS</Link>
        <Link to="/communityhub" className="nav-button decoration-sky-60 hover:text-blue text-white nav">COMMUNITY HUB</Link>
      </div>
    </div>
  );
};

export default Home;
