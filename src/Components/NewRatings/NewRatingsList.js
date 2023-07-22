import React from 'react';
import './NewRatings.css';  // Ensure you import your css file here

const NewRatingsList = ({ratings}) => {
    return (
        <div className="newratings-container">
            <div className="newratings-grid">
                {ratings.length > 0 && ratings.map((rating) => (
                    <div className="newratings-card" key={"1" + rating.id}> 
                        <div className="newratings-info">
                            {rating.get("User").get("firstName")} {rating.get("User").get("lastName")} rated <i>{rating.get("Restaurant").get("Name")}</i> for <b>{rating.get("Rating")} Stars</b>
                            <div className="rating-stars">
                                {'★'.repeat(rating.get("Rating"))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>{" "}
        </div>
    );
}

export default NewRatingsList;
