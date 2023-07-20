import { useState, useEffect,React } from 'react';
import { getAllRestaurants,getRestaurantbyName } from '../../common/services/RestaurantService';
import { createRating } from '../../common/services/RatingsService';
import WriteRatingForm from './WriteRatingForm'

export default function WriteRating() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getAllRestaurants().then((restaurants) => {
          console.log("notfiltered",restaurants);
          setRestaurants(restaurants);
        });
    }, []);

    const [add, setAdd] = useState(false);
    const [temp, setTemp] = useState();


    const handleRestChange  = (event) => {
        console.log("restchange",event.target.value);
        getRestaurantbyName(event.target.value).then((tempRest) => {
            setTemp(tempRest);
        });
        console.log("temp",temp); 
      };

    const handleRatingChange = (event) =>{
        console.log("ratingchange",event.target.value);
    }

    const handleOnClick = (event) => {
        console.log("");
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <div>
            <WriteRatingForm restaurants={restaurants} restChange={handleRestChange} ratingChange={handleRatingChange} onClick={handleOnClick} onSubmit={handleOnSubmit}/>
        </div>
    )
}
