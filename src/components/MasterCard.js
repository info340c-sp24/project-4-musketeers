import React, { useState, useEffect } from 'react';

const productsData = [
  { className: "Itzhak Perlman", category: "violin", skill: "Beginner", image: "/images/mc-1.jpeg" },
  { className: "Ringo Starr", category: "drums", skill: "Intermediate", image: "/images/mc-2.jpg" },
  { className: "Mariah Carey", category: "vocals", skill: "Intermediate", image: "/images/mc-3.jpeg" },
  { className: "Alicia Keys", category: "vocals", skill: "Beginner", image: "/images/mc-4.jpeg" },
  { className: "Timbaland", category: "edm", skill: "Professional", image: "/images/mc-5.webp" },
  { className: "Questlove", category: "edm", skill: "Intermediate", image: "/images/mc-6.jpeg" },
  { className: "Tom Morello", category: "e-guitar", skill: "Beginner", image: "/images/mc-7.jpeg" },
];

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const filtered = productsData.filter((product) =>
      product.className.toUpperCase().includes(searchTerm.toUpperCase()) &&
      (activeCategory === 'all' || product.category === activeCategory)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterProduct = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto p-2 lg:p-5">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 pr-4 mb-4 lg:mb-0">
          {['all', 'violin', 'drums', 'vocals', 'edm', 'e-guitar', 'Bottomwear'].map(category => (
            <button key={category} onClick={() => filterProduct(category)} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2 w-full">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <input
            type="search"
            id="search-input"
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            placeholder="Search product name here..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="flex flex-wrap -mx-2">
            {filteredProducts.map((product, index) => (
              <div key={index} className="p-2 w-1/2 md:w-1/3">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="w-full h-48">
                    <img src={product.image} alt={product.className} className="w-full h-full object-cover"/>
                  </div>
                  <div className="p-4">
                    <h5 className="text-lg font-bold">{product.className}</h5>
                    <h6 className="text-md">{product.skill}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarComponent;
