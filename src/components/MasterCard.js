import React, { useState, useEffect } from 'react';

const productsData = [
  { className: "Itzhak Perlman", category: "violin", skill: "beginner", image: "/images/mc-1.jpeg" },
  { className: "Ringo Starr", category: "drums", skill: "intermediate", image: "/images/mc-2.jpg" },
  { className: "Mariah Carey", category: "vocals", skill: "intermediate", image: "/images/mc-3.jpeg" },
  { className: "Alicia Keys", category: "vocals", skill: "beginner", image: "/images/mc-4.jpeg" },
  { className: "Timbaland", category: "edm", skill: "professional", image: "/images/mc-5.webp" },
  { className: "Questlove", category: "edm", skill: "intermediate", image: "/images/mc-6.jpeg" },
  { className: "Tom Morello", category: "e-guitar", skill: "beginner", image: "/images/mc-7.jpeg" },
  { className: "Comfy Gray Pants", category: "Bottomwear", skill: "49", image: "/images/mc-8.jpeg" },
];

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const filtered = productsData.filter((product) => {
      return (product.className.toUpperCase().includes(searchTerm.toUpperCase()) && (activeCategory === 'all' || product.category === activeCategory));
    });
    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterProduct = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="wrapper">
      <div id="search-container">
        <input
          type="search"
          id="search-input"
          placeholder="Search product name here.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div id="buttons">
        <button onClick={() => filterProduct('all')}>All</button>
        <button onClick={() => filterProduct('violin')}>Violin</button>
        <button onClick={() => filterProduct('drums')}>Drums</button>
        <button onClick={() => filterProduct('vocals')}>Vocals</button>
        <button onClick={() => filterProduct('edm')}>EDM</button>
        <button onClick={() => filterProduct('e-guitar')}>E-Guitar</button>
        <button onClick={() => filterProduct('Bottomwear')}>Bottomwear</button>
      </div>
      <div id="products">
        {filteredProducts.map((product, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <img src={product.image} alt={product.className} />
            </div>
            <div className="container">
              <h5 className="product-name">{product.className}</h5>
              <h6>{product.skill}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBarComponent;