import { useState, useEffect,React } from 'react';
import { getAllRestaurants } from '../../common/services/RestaurantService';
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


    const handleRestChange  = (event) => {
        console.log("restchange",event.target.value);
      };

    const handleRatingChange = (event) =>{
        console.log("ratingchange",event.target.value);
    }

    const handleOnClick = (event) => {
        console.log("");
    }

    return (
        <div>
            <WriteRatingForm restaurants={restaurants} restChange={handleRestChange} ratingChange={handleRatingChange} onClick={handleOnClick}/>
        </div>
    )
}
