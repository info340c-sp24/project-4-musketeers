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
    // <video className="h-full w-full rounded-lg" autoPlay playsInline muted loop>
    //   <source src="../images/EchoSysVid.mp4" type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    <div className="relative flex items-center  
        justify-center h-screen overflow-hidden"> 
        <video src="../images/EchoSysVid.mp4"
            autoplay="{true}" loop muted 
            className="absolute z-10 w-auto  
            min-w-full min-h-full max-w-none"> 
        </video> 
    </div> 

  );
};

export default Home;

<source src="../images/EchoSysVid.mp4" type="video/mp4" />
