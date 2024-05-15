import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Gallery from '../components/ComCard';


function CommunityHub() {
  const resetFilter = () => {
    // Add your resetFilter functionality here
  };

  const filterFavorites = () => {
    // Add your filterFavorites functionality here
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="header flex justify-center items-center bg-indigo-700 text-pink-200 h-60 m-0">
        <Container fluid className="flex justify-center items-center">
          <h1 className="text-5xl font-bold text-center">COMMUNITY HUB</h1>
          
        </Container>
      </header>

      <div className="flex justify-center items-center mt-6">
        <div className="text-center mx-4">
          <button
            className="text-xl font-semibold border-b-4 border-transparent hover:border-black"
            onClick={resetFilter}
          >
            Explore
          </button>
        </div>
        <div className="text-center mx-4">
          <button
            className="text-xl font-semibold border-b-4 border-transparent hover:border-black"
            onClick={filterFavorites}
          >
            Favorites
          </button>
        </div>
      </div>

      {/* Cards Start */}
      <div className='flex flex-wrap justify-center mt-10'>

      <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/fred1.png" alt="Fred Again.. 1" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">Fred Again.. 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/peggy1.png" alt="Peggy Gou 1" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">Peggy Gou 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/fred2.png" alt="Fred Again.. 2" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">Fred Again.. 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/john1.png" alt="John Summit 1" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">John Summit 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/peggy2.png" alt="Peggy Gou 2" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">Peggy Gou 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/john2.png" alt="John Summit 2" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">John Summit 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/fred3.png" alt="Fred Again.. 3" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">Fred Again.. 3</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

    <div class="p-4">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <figure className='rounded-xl'><img className='rounded-t-xl w-full h-80' src="../images/fred4.png" alt="Fred Again.. 4" /></figure>
        <div className="card-body m-2">
            <h2 className="card-title">Fred Again.. 4</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
            </div>
        </div>
    </div>
    </div>

      </div>
    </div>
  );
}

export default CommunityHub;