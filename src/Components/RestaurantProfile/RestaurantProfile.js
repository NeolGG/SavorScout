import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRestaurantbyID } from '../../common/services/RestaurantService';
import { getRatingsbyRestID } from '../../common/services/RatingsService';
import NewRatingsList from '../NewRatings/NewRatingsList';

export default function RestaurantProfile() {
    const { restaurantId } = useParams(); //gets restaurant ID from click
    const [restaurant, setRest] = useState();
    const [ratings, setRatings] = useState([]);

    useEffect(() =>{
        getRestaurantbyID(restaurantId).then((rest)=> {
            setRest(rest);
        })
        getRatingsbyRestID(restaurantId).then((ratings) => {
            setRatings(ratings);
        })
    }, [restaurantId]);

    const rest = restaurant ? restaurant[0].attributes : null;
    
    return (
        <div>
            {rest ? (
                <div>
                    <img src={rest.image}/>
                    <p>{rest.Name}</p>
                    <p>{rest.Cuisine}</p>
                    <p>{rest.Service}</p>
                    <div>
                        {'$'.repeat(rest.Price)}
                    </div>
                </div>
            ) : (
                <p> </p>
            )}
            <NewRatingsList ratings={ratings}/>
        </div>
    )
}
