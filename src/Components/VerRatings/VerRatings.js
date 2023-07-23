import React, {useState,useEffect} from 'react'
import { RatingsCont, getAllVerifiedRatings } from '../../common/services/RatingsService'
import VerRatingsList from './VerRatingsList'

const VerRatings = () => {
  const [vRatings, setvRatings] = useState([]);

    useEffect(() => {
      if (RatingsCont.collection.length) {
        setvRatings(RatingsCont.collection);
      } else {
        getAllVerifiedRatings().then((vRatings) => {
          setvRatings(vRatings);
        });
      }
    }, []);
    
    return (
      <div>
          <hr />
          These are the Verified ratings
          <hr />
          <div>
            <VerRatingsList vRatings = {vRatings}/>
          </div>
      </div>
    );

}

export default VerRatings