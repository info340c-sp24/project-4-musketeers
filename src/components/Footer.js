import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ background: 'linear-gradient(90deg, #2f3c7e 0%, #8aaae5 47.5%, #fbeaeb 97.5%)' }}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-center align-items-center py-3">
          <span className="mx-3">Register for free</span>
          <a href="/signup" className="btn btn-outline-light rounded-pill hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full focus:ring focus:ring-violet-300" role="button" style={{ textDecoration: 'none' }}>
            <span className='hover:text-black'>Sign Up</span>
          </a>
        </div>
      </div>
      <div className="text-center py-2" style={{ backgroundColor: 'black' }}>
        © 2024 4-Musketeers: <a className="text-white" href="/proposal">Project Proposal</a>
      </div>
      
    </footer>
    
  );
}

export default Footer;