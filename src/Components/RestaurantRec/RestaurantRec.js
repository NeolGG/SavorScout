import { useState, useEffect,React } from 'react';
import { getAllRestaurants,getCuisinebyName, getServicebyName} from '../../common/services/RestaurantService';
import RestaurantRecList from './RestaurantRecList';
import RestaurantRecForm from './RestaurantRecForm';

export default function RestaurantRec() {
  const [restaurants, setRestaurants] = useState([]);
  const [filters,setFilters] = useState({cuisine: '',service: ''});
  useEffect(() => {
    if (filters.cuisine) {
      console.log("cuisine",filters.cuisine);
      getCuisinebyName(filters.cuisine).then((restaurants) => {
        console.log("filtered",restaurants);
        setRestaurants(restaurants);
      });
    } else {
      getAllRestaurants().then((restaurants) => {
        console.log("notfiltered",restaurants);
        setRestaurants(restaurants);
      });
    }
  }, [filters.cuisine,]);

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
