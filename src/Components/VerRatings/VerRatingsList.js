const VerRatingsList = ({vRatings}) => {
    return (
      <div>
        <div>
          <p> </p>
          {vRatings.length > 0 && (
            <ul>
              {vRatings.map((vRating) => (
                <li key={"1" + vRating.id}> 
                  {" "}
                  {vRating.get("User").get("firstName")} {vRating.get("User").get("lastName")} <br />
                  {vRating.get("Restaurant").get("Name")}<br />
                  {vRating.get("Rating")} Stars
                </li> 
              ))}
            </ul>
          )}
        </div>{" "}
      </div>
    );
}

export default VerRatingsList