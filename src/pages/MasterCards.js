import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchBarComponent from "../components/MasterCard";

function MasterCards() {
    return (
      <div className="min-h-screen bg-black">
  
        {/* <header className="header flex justify-center items-center bg-indigo-700 text-pink-200 h-40vh">
          <Container fluid className="flex justify-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mt-16">COMMUNITY HUB</h1>
          </Container>
        </header>
  
        <div className="flex justify-center items-center mt-10">
          <Row className="flex">
            <Col sm={12} className="text-center mb-4">
              <Button className="text-2xl px-6 py-2 border-b-2 border-transparent hover:border-indigo-700" onClick={resetFilter}>Explore</Button>
            </Col>
            <Col sm={12} className="text-center">
              <Button className="text-2xl px-6 py-2 border-b-2 border-transparent hover:border-indigo-700" onClick={filterFavorites}>Favorites</Button>
            </Col>
          </Row>
        </div> */}
  
        {/* Gallery Component */}
        <SearchBarComponent />
      </div>
    );
  }
  
  export default MasterCards;
  