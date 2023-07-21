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
    const [temp2,set2Temp] = useState();

    const handleRestChange  = (event) => {
        console.log("restchange",event.target.value);
        getRestaurantbyName(event.target.value).then((tempRest) => {
            setTemp(tempRest);
        });
        console.log("temp",temp[0].id); 
      };

    const handleRatingChange = (event) =>{
        console.log("ratingchange",event.target.value);
        set2Temp(event.target.value);
        console.log("rating",temp2);
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log("clicked");
        console.log(temp);
        console.log(temp2);
        createRating(temp2,temp);
    }

    return (
        <div>
            <WriteRatingForm restaurants={restaurants} restChange={handleRestChange} ratingChange={handleRatingChange} onSubmit={handleOnSubmit}/>
        </div>
    )
}
