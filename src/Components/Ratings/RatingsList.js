const RatingsList = ({ratings}) => {
      return (
        <div>
          <div>
            <p> </p>
            {ratings.length > 0 && (
              <ul>
                {ratings.map((rating) => (
                  <li key={"1" + rating.id}> 
                    {" "}
                    {rating.get("User").get("firstName")} {rating.get("User").get("lastName")} <br />
                    {rating.get("Restaurant").get("Name")}<br />
                    {rating.get("Rating")} Stars
                  </li> 
                ))}
              </ul>
            )}
          </div>{" "}
        </div>
      );
}

export default RatingsList