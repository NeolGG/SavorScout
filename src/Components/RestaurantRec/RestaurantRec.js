import { useState, useEffect,React } from 'react';
import { getAllRestaurants,getCuisinebyName,RestCont } from '../../common/services/RestaurantService';
import RestaurantRecList from './RestaurantRecList';
import RestaurantRecForm from './RestaurantRecForm';

export default function RestaurantRec() {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisine, setCuisine] = useState();
  const [service, setService] = useState();

  useEffect(() => {
    if (cuisine) {
      console.log("cuisine",cuisine);
      getCuisinebyName(cuisine).then((restaurants) => {
        console.log("filtered",restaurants);
        setRestaurants(restaurants);
      });
      const testcont = [cuisine,service];
      console.log("test",testcont.length);
      console.log(testcont);
    } else {
      getAllRestaurants().then((restaurants) => {
        console.log("notfiltered",restaurants);
        setRestaurants(restaurants);
      });
    }
  }, [cuisine]);

  const cuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const serviceChange = (event) => {
    setService(event.target.value);
  };

  return (
    <div>
      Restaurant
      <RestaurantRecForm cuisineChange={cuisineChange}/>
      <RestaurantRecList restaurants = {restaurants}/>
    </div>
  )
}
