import React,{ useState, useEffect} from 'react'
import { getAllRatings,RatingsCont } from '../../common/services/RatingsService'
import NewRatingsList from './NewRatingsList';
import './NewRatings.css';  // Ensure you import your css file here

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
      <div className="newratings-container">
          <hr />
          <h2 className="newratings-header">★ New Ratings ★</h2>
          <hr/>
          <NewRatingsList ratings = {ratings}/>
      </div>
    );
}

export default NewRatings;
