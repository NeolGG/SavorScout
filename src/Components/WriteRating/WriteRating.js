import { useState, useEffect,React } from 'react';
import { getAllRestaurants } from '../../common/services/RestaurantService';
import { createRating } from '../../common/services/RatingsService';
import WriteRatingForm from './WriteRatingForm'

export default function WriteRating() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const query = getAllRestaurants();
        query.find().then((results) => {
            setRestaurants(results);
        });
    }, []);

    const [temp, setTemp] = useState("");
    const [temp2,set2Temp] = useState("");

    const handleRestChange  = (event) => {
        setTemp(event.target.value);
      };

    const handleRatingChange = (event) =>{
        set2Temp(event.target.value);
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        if (temp == "" || temp2 == "") {
            console.log("Choose a rating and restaurant.");
        } else {
            createRating(temp2, temp);
        }
    }

    return (
        <div>
            <WriteRatingForm restaurants={restaurants} restChange={handleRestChange} ratingChange={handleRatingChange} onSubmit={handleOnSubmit}/>
        </div>
    )
}
