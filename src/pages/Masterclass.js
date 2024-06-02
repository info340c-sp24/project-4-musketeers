import React from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

export default function Masterclass() {
  const navigate = useNavigate(); 

  const navigateToMasterCards = (category) => {
    navigate('/mastercards', { state: { category } });
  };

  return (
    <div>
      <Helmet>
        <title>EchoSystem | Masterclass</title>
      </Helmet>
      <div className="bg-black h-96 flex flex-col justify-center items-center relative">
        <div className="text-center md:space-x-4 lg:space-x-8">
          <div className="text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-100 text-8xl lg:text-9xl font-bold md:inline-block" data-aos="fade-up" data-aos-duration="2000">
            MASTER
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-100 text-8xl lg:text-9xl font-bold md:inline-block md:mt-0.5 md:pl-0" data-aos="fade-up" data-aos-duration="2000">
            CLASS
          </div>
        </div>
        <div className="absolute bottom-4 text-white text-lg bounce right-10">scroll right for more {'>>'}</div>
      </div>

      {/* Carousel Start */}
      <div className="overflow-x-auto h-5/6 scroll-smooth">
        <div className="flex">
          <div
            className="relative bg-piano-blue w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-80"
            onClick={() => navigateToMasterCards('all')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/piano.png" alt="piano" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-light-pink text-7xl font-extrabold text-left transition-colors duration-300 hover:text-white ">
              VIEW ALL
            </div>
          </div>
          <div
            className="relative bg-vocals-creme w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-20"
            onClick={() => navigateToMasterCards('vocals')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/vocals.png" alt="vocals" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-black text-7xl font-extrabold text-left transition-colors duration-300 hover:text-gray-800">
              VOCALS
            </div>
          </div>
          <div
            className="relative bg-light-blue w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-80"
            onClick={() => navigateToMasterCards('e-guitar')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/guitar.png" alt="guitar" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-white text-7xl font-extrabold text-left transition-colors duration-300 hover:text-gray-300">
              E-GUITAR
            </div>
          </div>
          <div
            className="relative bg-white w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-80"
            onClick={() => navigateToMasterCards('drums')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/drums.png" alt="drums" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-black text-7xl font-extrabold text-left transition-colors duration-300 hover:text-gray-700">
              DRUMS
            </div>
          </div>
          <div
            className="relative bg-pale-gray w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-80"
            onClick={() => navigateToMasterCards('edm')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/edm.png" alt="edm" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-piano-blue text-7xl font-extrabold text-left transition-colors duration-300 hover:text-blue-800">
              EDM
            </div>
          </div>
          <div
            className="relative bg-piano-blue w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-80"
            onClick={() => navigateToMasterCards('harp')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/harp.png" alt="harp" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-white text-7xl font-extrabold text-left transition-colors duration-300 hover:text-gray-300">
              HARP
            </div>
          </div>
          <div
            className="relative bg-light-pink w-96 flex-shrink-0 h-5/6 flex items-center justify-center transition-transform transform hover:bg-opacity-20"
            onClick={() => navigateToMasterCards('rap')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/rap.png" alt="rap" className="h-auto transition-transform duration-300 " />
            <div className="absolute top-0 left-1 text-black text-7xl font-extrabold text-left transition-colors duration-300 hover:text-gray-800">
              RAP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
