import {React, useState,useEffect} from 'react'
import { getAllRatings,RatingsCont, getAllVerifiedRatings } from '../../common/services/RatingsService'
import RatingsList from './RatingsList'
import RatingsvList from './RatingsvList'



const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  const [vRatings, setvRatings] = useState([]);

    useEffect(() => {
      if (RatingsCont.collection.length) {
        setRatings(RatingsCont.collection);
      } else {
        getAllRatings().then((ratings) => {
          console.log(ratings);
          setRatings(ratings);
        });
      }
    }, []);

    useEffect(() => {
      if (RatingsCont.collection.length) {
        setvRatings(RatingsCont.collection);
      } else {
        getAllVerifiedRatings().then((vRatings) => {
          console.log(vRatings);
          setvRatings(vRatings);
        });
      }
    }, []);
    
    return (
      <div>
          <hr />
          These are the ratings
          <div>
            <RatingsList ratings ={ratings}/>
          </div>
          <hr />
          These are the Verified ratings
          <div>
            <RatingsvList vRatings = {vRatings}/>
          </div>
      </div>
    );

}

export default Ratings
