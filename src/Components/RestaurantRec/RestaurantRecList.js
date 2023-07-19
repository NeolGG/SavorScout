const RestaurantRecList = ({restaurants}) => {
  return (
    <div>
      <hr />
      These are the verified users
      <div>
        <p> </p>
        {restaurants.length > 0 && (
          <ul>
            {restaurants.map((restaurant) => (
              <li key={"1" + restaurant.id}> 
                {" "}
                {restaurant.get("username")} | {restaurant.get("firstName") }  {restaurant.get("lastName") }
              </li> 
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
}

export default RestaurantRecList;