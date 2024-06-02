import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MasterCard from "../components/MasterCard";
import { Helmet } from 'react-helmet';

function MasterCards() {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>EchoSystem | Community Hub</title>
      </Helmet>
      <header className="header flex justify-center items-center bg-piano-blue text-vocals-creme h-60 m-0 mb-4">
        <div className="container-fluid flex justify-center items-center">
          <h1 className="text-5xl font-bold text-center">MASTERCLASS</h1>
        </div>
      </header>
      
      {/* Gallery Component with top padding */}
      <div className="pt-4">
        <MasterCard />
      </div>
    </div>
  );
}

export default MasterCards;
  