import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('/api/brands');
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div>
      <h1>Our Brands</h1>
      <p>Discover the top brands we offer for salon cosmetics.</p>

      {brands.map((brand) => (
        <div key={brand.id}>
          <h2>{brand.name}</h2>
          <p>{brand.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Brands;
  