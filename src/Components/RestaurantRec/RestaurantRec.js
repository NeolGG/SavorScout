import { useState, useEffect,React } from 'react';
import { getAllRestaurants,getCuisinebyName,RestCont } from '../../common/services/RestaurantService';
import RestaurantRecList from './RestaurantRecList';
import RestaurantRecForm from './RestaurantRecForm';

export default function RestaurantRec() {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisine, setCuisine] = useState('');

  useEffect(() => {
    if (cuisine) {
      console.log("cuisine",cuisine);
      getCuisinebyName(cuisine).then((restaurants) => {
        console.log("filtered",restaurants);
        setRestaurants(restaurants);
      });
    } else {
      getAllRestaurants().then((restaurants) => {
        console.log("notfiltered",restaurants);
        setRestaurants(restaurants);
      });
    }
  }, [cuisine]);

  const filterChange = (event) => {
    const selectedCuisine = event.target.value;
    console.log(selectedCuisine);
    setCuisine(selectedCuisine);
  };

  return (
    <div>
      Restaurant
      <RestaurantRecForm onChange={filterChange}/>
      <RestaurantRecList restaurants = {restaurants}/>
    </div>
  )
}
