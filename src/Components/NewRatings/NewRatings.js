import React,{ useState,useEffect} from 'react'
import { getAllRatings,RatingsCont } from '../../common/services/RatingsService'
import NewRatingsList from './NewRatingsList';

const NewRatings = () => {
  const [ratings, setRatings] = useState([]);

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
    
    return (
      <div>
          <hr />
          These are the New ratings
          <hr/>
          <div>
          <NewRatingsList ratings = {ratings}/>
          </div>
      </div>
    );

}

export default NewRatings;
