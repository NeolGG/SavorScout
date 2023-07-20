const VerifiedList = ({ users, ratings }) => {
  return (
    <div>
      <hr />
      These are the verified users
      <div>
        <p> </p>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={"1" + user.id}> 
                {" "}
                {user.get("username")} | {user.get("firstName") }  {user.get("lastName") }
              </li> 
            ))}
          </ul>
        )}
      </div>{" "}
      <hr />
      Verified Users' Ratings
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

export default VerifiedList;
