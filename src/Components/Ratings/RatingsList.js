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
                    {rating.get("Rating")} | {rating.get("Restaurant").get("Name")} {rating.get("User").get("username")} {" "}
                  </li> 
                ))}
              </ul>
            )}
          </div>{" "}
        </div>
      );
}

export default RatingsList