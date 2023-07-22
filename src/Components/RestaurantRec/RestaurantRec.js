import './RestaurantRec.css';
import { useState, useEffect,React } from 'react';
import { getAllRestaurants} from '../../common/services/RestaurantService';
import RestaurantRecList from './RestaurantRecList';
import RestaurantRecForm from './RestaurantRecForm';

export default function RestaurantRec() {
  const [restaurants, setRestaurants] = useState([]);
  const [filters,setFilters] = useState({cuisine: '',service: ''});

  useEffect(() =>{
    const query =  getAllRestaurants();
    if (filters.cuisine){
      query.equalTo("Cuisine",filters.cuisine);
    }
    if(filters.service){
      query.equalTo("Service",filters.service);
    }
    query.find().then((results) => {
        setRestaurants(results);
    });
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      Restaurant
      <RestaurantRecForm onChange = {handleFilterChange}/>
      <RestaurantRecList restaurants = {restaurants}/>
    </div>
  );
}
