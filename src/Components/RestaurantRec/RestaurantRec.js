import './RestaurantRec.css';
import { useState, useEffect } from 'react';
import { getAllRestaurants } from '../../common/services/RestaurantService';
import RestaurantRecList from './RestaurantRecList';
import RestaurantRecForm from './RestaurantRecForm';
import HomeButton from '../HomeButton/HomeButton';

export default function RestaurantRec() {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState({ cuisine: '', service: '' , price: ''});

  useEffect(() => {
    const query = getAllRestaurants();
    if (filters.cuisine) {
      query.equalTo("Cuisine", filters.cuisine);
    }
    if (filters.service) {
      query.equalTo("Service", filters.service);
    }
    if (filters.price) {
      const price = filters.price.match(/\$/g).length
      query.equalTo("Price", price);
    }
    query.find().then((results) => {
      setRestaurants(results);
    });
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="restaurant-container">
      <HomeButton/>
      <h1 className="restaurant-title">⭐ Restaurant Recommendations ⭐</h1>
      <RestaurantRecForm onChange={handleFilterChange} />
      <RestaurantRecList restaurants={restaurants} />
    </div>
  );
}
