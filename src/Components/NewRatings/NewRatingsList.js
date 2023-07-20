const NewRatingsList = ({ratings}) => {
      return (
        <div>
          <div>
            <p> </p>
            {ratings.length > 0 && (
              <ul>
                {ratings.map((rating) => (
                  <li key={"1" + rating.id}> 
                    {" "}
                    {rating.get("User").get("firstName")} {rating.get("User").get("lastName")} rated <i>{rating.get("Restaurant").get("Name")}</i> for <b>{rating.get("Rating")} Stars</b>
                  </li> 
                ))}
              </ul>
            )}
          </div>{" "}
        </div>
      );
}

export default NewRatingsList