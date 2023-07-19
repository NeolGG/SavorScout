import React, {useState,useEffect} from 'react'
import { getAllRatings,Ratings } from '../../common/services/RatingsService'

const RatingsList = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        if (Ratings.collection.length) {
          setRatings(Ratings.collection);
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
          These are the ratings
          <div>
            <p> </p>
            {/* Check that the lesson object exists */}
            {ratings.length > 0 && (
              <ul>
                {/* Using getter for lesson Object to display name */}
                {ratings.map((rating) => (
                  <li key={"1" + rating.id}> 
                    {" "}
                    {rating.id} | {rating.get("Rating")} | {rating.get("Restaurant").get("Name")} | <br />{rating.get("User").get("username")} {" "}
                  </li> 
                ))}
              </ul>
            )}
          </div>{" "}
        </div>
      );

}

export default RatingsList