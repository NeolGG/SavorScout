const RatingsvList = ({vRatings}) => {
    return (
      <div>
        <div>
          <p> </p>
          {vRatings.length > 0 && (
            <ul>
              {vRatings.map((vRating) => (
                <li key={"1" + vRating.id}> 
                  {" "}
                  {vRating.get("Rating")} | {vRating.get("Restaurant").get("Name")} {vRating.get("User").get("username")} {" "}
                </li> 
              ))}
            </ul>
          )}
        </div>{" "}
      </div>
    );
}

export default RatingsvList