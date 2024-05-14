import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ background: 'linear-gradient(90deg, #2f3c7e 0%, #8aaae5 47.5%, #fbeaeb 97.5%)' }}>
      <div className="container-fluid p-4 pb-0">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <a href="/signup" className="btn btn-outline-light rounded-pill text-white" role="button" style={{ textDecoration: 'none' }}>
            Sign Up
          </a>
        </p>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'black' }}>
        © 2024 4-Musketeers: <a className="text-white" href="/proposal">Project Proposal</a>
      </div>
    </footer>
  );
}

export default Footer;