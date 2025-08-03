import React, { useEffect, useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { theme, getFontClass } = useContext(ThemeContext);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(error => console.error(error));
  }, []);

  const getCardStyles = () => {
    if (theme === 'theme1') return 'bg-blue-100 text-blue-900 shadow hover:shadow-md';
    if (theme === 'theme2') return 'bg-[#2a2540] text-yellow-400 shadow-md hover:shadow-lg';
    if (theme === 'theme3') return 'bg-orange-50 text-red-700 shadow hover:shadow-xl';
    return '';
  };

  const getButtonStyles = () => {
    if (theme === 'theme1') return 'bg-blue-600 hover:bg-blue-700 text-white';
    if (theme === 'theme2') return 'bg-blue-500 hover:bg-blue-600 text-white';
    if (theme === 'theme3') return 'bg-orange-500 hover:bg-orange-600 text-white';
    return '';
  };

  const getHeadingColor = () => {
    if (theme === 'theme1') return 'text-blue-800';
    if (theme === 'theme2') return 'text-yellow-300';
    if (theme === 'theme3') return 'text-red-600';
    return '';
  };

  return (
    <div className={`p-4 min-h-screen ${getFontClass()}`}>
      <h1 className={`text-2xl font-bold mb-4 ${getHeadingColor()} ${getFontClass()}`}>
        Welcome to Theme Switcher Store
      </h1>

      {theme === 'theme3' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className={`rounded-lg p-4 transition ${getCardStyles()} ${getFontClass()}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto"
              />
              <h2 className={`mt-2 text-lg font-bold ${getFontClass()}`}>{product.title}</h2>
              <p className={`mt-1 font-semibold ${getFontClass()}`}>${product.price}</p>
              <button className={`mt-3 px-4 py-2 cursor-pointer rounded transition ${getButtonStyles()} ${getFontClass()}`}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map(product => (
            <div
              key={product.id}
              className={`rounded p-4 transition ${getCardStyles()} ${getFontClass()}`}
            >
              <h2 className={`text-lg font-semibold ${getFontClass()}`}>{product.title}</h2>
              <p className={`text-sm mt-1 ${getFontClass()}`}>{product.description}</p>
              <p className={`mt-2 font-bold ${getFontClass()}`}>${product.price}</p>
              <button className={`mt-2 px-4 py-1 cursor-pointer rounded transition ${getButtonStyles()} ${getFontClass()}`}>
                Buy
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
