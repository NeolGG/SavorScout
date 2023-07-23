import React from 'react';
import './VerRatings.css'; 

const VerRatingsList = ({ vRatings }) => {
  return (
    <div className="verratings-container">
      <div className="verratings-grid">
        {vRatings.length > 0 && vRatings.map((vRating) => (
          <div className="verratings-card" key={"1" + vRating.id}>
            <div className="verratings-info">
              {vRating.get("User").get("firstName")} {vRating.get("User").get("lastName")} rated
              <i>{vRating.get("Restaurant").get("Name")}</i>
              for
              <b>{vRating.get("Rating")} Stars</b>
              <div className="rating-stars">
                {'★'.repeat(vRating.get("Rating"))}
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default VerRatingsList;
