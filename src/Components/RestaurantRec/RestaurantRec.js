import { useState, useEffect,React } from 'react';
import { getAllRestaurants,RestCont } from '../../common/services/RestaurantService';
import RestaurantRecList from './RestaurantRecList';

export default function RestaurantRec() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (RestCont.collection.length) {
      setRestaurants(RestCont.collection);
    } else {
      getAllRestaurants().then((restaurants) => {
        console.log(restaurants);
        setRestaurants(restaurants);
      });
    }
  }, []);

  return (
    <div>
      Verified Users
      <RestaurantRecList restaurants = {restaurants}/>
    </div>
  )
}
