const RestaurantRecList = ({restaurants}) => {
  return (
    <div>
      <hr />
      These are Restaurants
      <div>
        <p> </p>
        {restaurants.length > 0 && (
          <ul>
            {restaurants.map((restaurant) => (
              <li key={"1" + restaurant.id}> 
                {" "}
                {restaurant.get("Name")} | {restaurant.get("Cuisine") } | {restaurant.get("Service") }
              </li> 
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
}

export default RestaurantRecList;